/* 
         3
       —— —— ——
   0 /      1 / |               |
    /  2     /  |7              |
   —— —— ——     |               |5
  |         |   |               |    9
  |4        |6                   —— —— ——
  |         |  /11             /10
  |    8    | /               /
   —— —— ——
*/
import { Face } from "../constant/face";

export enum LINE {
  TOP_LEFT = 0,
  TOP_RIGHT = 1,
  TOP_FRONT = 2,
  TOP_BACK = 3,
  FRONT_LEFT = 4,
  BACK_LEFT = 5,
  FRONT_RIGHT = 6,
  BACK_RIGHT = 7,
  FRONT_BOTTOM = 8,
  BACK_BOTTOM = 9,
  LEFT_BOTTOM = 10,
  RIGHT_BOTTOM = 11
}

const TOP_FACE = new Face([
  LINE.TOP_LEFT,
  LINE.TOP_BACK,
  LINE.TOP_RIGHT,
  LINE.TOP_FRONT
]);
const LEFT_FACE = new Face([
  LINE.TOP_LEFT,
  LINE.FRONT_LEFT,
  LINE.LEFT_BOTTOM,
  LINE.BACK_LEFT
]);
const FRONT_FACE = new Face([
  LINE.TOP_FRONT,
  LINE.FRONT_RIGHT,
  LINE.FRONT_BOTTOM,
  LINE.FRONT_LEFT
]);
const BACK_FACE = new Face([
  LINE.TOP_BACK,
  LINE.BACK_RIGHT,
  LINE.BACK_BOTTOM,
  LINE.FRONT_RIGHT
]);
const RIGHT_FACE = new Face([
  LINE.TOP_RIGHT,
  LINE.BACK_RIGHT,
  LINE.RIGHT_BOTTOM,
  LINE.FRONT_RIGHT
]);
const BOTTOM_FACE = new Face([
  LINE.TOP_LEFT,
  LINE.TOP_BACK,
  LINE.TOP_RIGHT,
  LINE.TOP_FRONT
]);

export enum ENUM_FACE {
  TOP = 0, // z轴正
  LEFT = 1, // x轴负
  FRONT = 3, // y轴正
  BACK = 4, // y轴负
  RIGHT = 4, // x轴正
  BOTTOM = 5 // z轴负
}

// 相对于上一个面的旋转位置
export enum ENUM_RELATIVE_FACE {
  SAME = 0,
  CLOCK_WISE = 1,
  ANTI_CLOCK_WISE = 2,
  OPPOSITE = 3
}
