import  Subsidiary  from '../models/subsidiary';

export abstract class Create {
  public abstract create(subsidiary: Subsidiary): void;
}