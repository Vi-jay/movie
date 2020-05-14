/***
 * @param canvas dom
 * @param img 必须是onload的图片
 * @param {Object} size
 * @param step 帧数
 * @param timeout 间隔时间
 */
import anime from "animejs";

export function changeNumber(targets, f, t, round = 1, duration = 1000) {
  anime({
    targets,
    innerHTML: [f, t],
    easing: "linear",
    round,
    duration
  })
}

export function animateMoveTo(targets, to, duration = 1000) {
  anime({
    targets,
    ...to,
    easing: "easeOutCubic",
    duration
  })
}
