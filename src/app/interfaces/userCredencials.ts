import { IResponse } from '../interfaces/iresponse';
import jwt_decode from "jwt-decode";
export class UserCredencials{
    Id: number;
    roleId: number;
    familyId: number;
    familyCode: string;

    constructor(id?:number,roleId?:number, familyId?:number, familyCode?:string){
        this.Id=id === undefined ? -1 :id;
        this.roleId=roleId === undefined ? -1 : roleId;
        this.familyId=familyId === undefined ? -1 : familyId;
        this.familyCode=familyCode === undefined ? '' : familyCode;
    }
    private getJwtToken(){
        return localStorage.getItem('token');
      }
      public getToken(){
        var token = this.tokenDecode();
        //console.log(token.roleId+"estoy aqui");
    }
    private tokenDecode(): any{
          
        return jwt_decode(localStorage.getItem('token')!);
    }
    
    
      
}