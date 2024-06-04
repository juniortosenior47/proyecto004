import { Injectable } from '@nestjs/common';
import { size2d } from './array.config';
import { ResponseDTO } from './response.dto';

@Injectable()
export class AppService {
  private rows: any;
  private pattern: any;
  private response: any;

  initArray(row: number, column: number) {
    this.rows = new Array(row);
    this.pattern = new Array(column);
  }

  setPattern(text: string) {
    const varsize2d = size2d.filter((item) => item.lenth === text.length);

    this.initArray(varsize2d[0].row, varsize2d[0].column);

    let columncontrol = 0;
    let rowcontrol = 0;

    for (let i = 0; i < text.length; i++) {
      this.rows[rowcontrol] = text[i];
      rowcontrol++;

      if (rowcontrol === varsize2d[0].row) {
        this.pattern[columncontrol] = this.rows;
        this.rows = [];
        columncontrol++;
        rowcontrol = 0;
      }
    }
  }

  getPattern() {
    return this.pattern;
  }

  getPatternConsole() {
    console.log(`Matrix patron2D o parte privada:`);
    console.log(`     0    1    2    3`);
    console.log(
      `0    ${this.pattern[0][0]}    ${this.pattern[0][1]}    ${this.pattern[0][2]}    ${this.pattern[0][3]}`,
    );
    console.log(
      `1    ${this.pattern[1][0]}    ${this.pattern[1][1]}    ${this.pattern[1][2]}    ${this.pattern[1][3]}`,
    );
    console.log(
      `2    ${this.pattern[2][0]}    ${this.pattern[2][1]}    ${this.pattern[2][2]}    ${this.pattern[2][3]}`,
    );
  }

  setResponse(patern: any, text: string) {
    this.response = [];
    for (let i = 0; i < patern.length; i++) {
      for (let j = 0; j < patern[i].length; j++) {
        this.response.push({
          order: text.indexOf(patern[i][j]),
          row: i,
          column: j,
        });
      }
    }
  }
  getResponse() {
    return this.response;
  }
  getResponseConsole() {
    console.log(JSON.stringify(this.response));
  }
  compressv1(text: string): ResponseDTO {
    this.setPattern(text);
    this.getPatternConsole();
    this.setResponse(this.pattern, text);
    this.getResponseConsole();
    return this.getResponse();
  }
}
