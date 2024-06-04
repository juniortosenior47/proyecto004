import { IsNotEmpty, IsString } from 'class-validator';

export class CompressDTO implements CompressBody {
  @IsNotEmpty()
  @IsString()
  text: string;
}

export interface CompressBody {
  text: string;
}
