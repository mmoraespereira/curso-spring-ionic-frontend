import { Injectable } from "@angular/core";
import { localUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys.config";

@Injectable()
export class StorageService{
     getLocalUser() : localUser{
         let usr = localStorage.getItem(STORAGE_KEYS.localUser);
         if(usr == null){
             return null;
         }else{
             return JSON.parse(usr)
         }
     }

     setLocalUser(obj : localUser){
        if( obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
     }
}