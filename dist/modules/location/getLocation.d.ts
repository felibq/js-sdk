import { LocationOptions, LocationRes } from '../types/location';
/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions<[], LocationRes>} [options]
 * @returns
 */
export default function takePhoto(options?: LocationOptions<[], LocationRes>): Promise<LocationRes>;
