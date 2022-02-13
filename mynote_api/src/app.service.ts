import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Folder, FolderDocument} from "./folder/folder.model";
import {Model} from "mongoose";

@Injectable()
export class AppService {
  constructor(@InjectModel(Folder.name) private folderModel: Model<FolderDocument>) {}
  getHello(): string {
    return 'Hello World!';
  }

  // TODO Remove
 async addToChildFolder() {
   //  const allFolder = await this.folderModel.find().exec()
   // const result = await Promise.all(allFolder.map( async (folder: any) => {
   //   const reg = [...folder.pathname.matchAll(/\/\w*\//g)]
   //   const pathname = reg[reg.length - 1] && reg[reg.length - 1][0].replaceAll('/', '')
   //   if (pathname) {
   //     const parentFolder = await this.folderModel.findOne({title: pathname}).exec()
   //     const containFolder = parentFolder.childrenFolders.find((item: any) => item._id === folder._id.toString())
   //     if(!containFolder){
   //       parentFolder.childrenFolders && parentFolder.childrenFolders.push(folder._id.toString())
   //     }
   //
   //     const finallyParentFolder = await this.folderModel
   //       .findByIdAndUpdate(parentFolder._id.toString(), {childrenFolders: parentFolder.childrenFolders}, {new: true})
   //       .exec()
   //
   //     const finallyChildFolder = await this.folderModel
   //       .findByIdAndUpdate(folder._id.toString(), {parentFolderId: parentFolder._id.toString()}, {new: true})
   //       .exec()
   //     console.log('allFolder', finallyParentFolder)
   //   }
   //
   // }))

    return 'Hi child'
  }
}
