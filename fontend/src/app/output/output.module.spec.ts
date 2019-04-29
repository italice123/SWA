import { OutputModule } from './output.module';

describe('OutputModule', () => {
  let outputModule: OutputModule;

  beforeEach(() => {
    outputModule = new OutputModule();
  });

  it('should create an instance', () => {
    expect(outputModule).toBeTruthy();
  });
});
