import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompressDTO } from './request.dto';
import { ResponseDTO } from './response.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const request: CompressDTO = { text: 'Eraseunavez.' };
      const response: ResponseDTO[] = [
        { order: 0, row: 0, column: 0 },
        { order: 1, row: 0, column: 1 },
        { order: 2, row: 0, column: 2 },
        { order: 3, row: 0, column: 3 },
        { order: 4, row: 1, column: 0 },
        { order: 5, row: 1, column: 1 },
        { order: 6, row: 1, column: 2 },
        { order: 2, row: 1, column: 3 },
        { order: 8, row: 2, column: 0 },
        { order: 4, row: 2, column: 1 },
        { order: 10, row: 2, column: 2 },
        { order: 11, row: 2, column: 3 },
      ];
      expect(appController.compress(request)).toBe(response);
    });
  });
});
