import { Injectable } from '@angular/core';
// ES6+ example
import {S3} from "aws-sdk";
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  public s3:S3;



  constructor() {
    this.s3 = new S3(
      {
        accessKeyId: environment.AWS_accessKeyId,
        secretAccessKey: environment.AWS_secretAccessKey,
        region: environment.region
      }
    );
  }

  async uploadFileToS3(file: any, path: any) {
    try {
      
      const params = {
        Bucket: 'saavithri-bucket',
        Key: path  + new Date().getTime().toString() + '_' + file.name,
        Body: file,
        ContentType: file.type
      };

      return await this.s3.upload(params).promise();
    }
    catch (e: any) {
      console.log(e.message);
      throw e.message;
    }
  }
}
