import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
    let controller: AppController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppController],
        }).compile();

    controller = module.get<AppController>(AppController);
    });

    it('should return "It is just a message!"', () => {
        expect(controller.getGreeting()).toEqual({ message: 'It is just a message!' });
    });
});