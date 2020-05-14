const Client = require('ssh2').Client;

const fs = require('fs');
const path = require('path');

const yaml = require("js-yaml");
const PUBLISH_CONFIG = yaml.safeLoad(fs.readFileSync("publish-config.yaml", 'utf8'));

const archiver = require('archiver');

(async () => {

    /**** 配置 *****/
    const CONFIG = PUBLISH_CONFIG;
    /**** 配置 *****/

    /**** 压缩 *****/
    const uploadZipPath = __dirname + '/upload.zip';
    const output = fs.createWriteStream(uploadZipPath);

    const archive = archiver('zip', {
      zlib: {level: 6} // Sets the compression level.
    });
    archive.pipe(output);
    archive.directory(path.resolve(".", CONFIG.filePath), path.sep + CONFIG.filePath);
    archive.finalize();

    /**** 连接 *****/
    for (let ip of CONFIG.ip) {
      await upload(ip);
    }

    function upload(ip) {
      const conn = new Client();
      return new Promise((resolve) => {
        conn.on('ready', function () {

          conn.sftp(function (err, sftp) {
            if (err) throw err;
            //上传
            console.log(path.posix.join(CONFIG.targetPath, "upload.zip"));
            sftp.fastPut(path.resolve(".", "upload.zip"), path.posix.join(CONFIG.targetPath, "upload.zip"), function (err) {
              if (err) throw err;
              conn.exec(`unzip -o ${path.posix.join(CONFIG.targetPath, "upload.zip")} -d ${path2Dir(CONFIG.targetPath)}`, function (err, stream) {
                if (err) throw err;
                stream.on('close', function (code, signal) {
                  conn.end();
                }).on('data', function (data) {
                  console.log('STDOUT: ' + data);
                  console.log("上传成功");
                  resolve();
                }).stderr.on('data', function (data) {
                  process.stdout.write("解压失败");
                  console.log('STDERR: ' + data);
                });
              });
            })
          });
        }).connect({
          host: ip,
          port: 22,
          username: CONFIG.username,
          password: CONFIG.password
        });
      })
    }
  }

)();


function path2Dir(path) {
  return path.indexOf("/", path.length) > -1 ? path + "/" : path
}
