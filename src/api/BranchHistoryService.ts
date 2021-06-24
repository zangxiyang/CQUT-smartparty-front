/**
 * @作者: Seale
 * @时间: 2021/6/24
 * @版本: V1.0
 * @说明:
 * @网站: https://www.imsle.com
*/
import {AxiosResponse} from "axios";
import {Methods, request} from "@/utils/https";
import {ApiEnum, getApi} from "@/api/Api";

export class BranchHistoryService{
    public static async getHistory(id = 1): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.BRANCH_HISTORY_API),Methods.GET,{
            id
        })
    }
}