import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 200,
      license_plate: "def-1122",
      fine_amount: 150,
      brand: "Car Brand",
      category_id: "Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car2 Description",
      daily_rate: 200,
      license_plate: "def-1122",
      fine_amount: 150,
      brand: "CarBrandTest",
      category_id: "Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "CarBrandTest",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car3 Description",
      daily_rate: 200,
      license_plate: "def-1122",
      fine_amount: 150,
      brand: "CarBrandTest",
      category_id: "Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Category ID",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car3 Description",
      daily_rate: 200,
      license_plate: "def-1122",
      fine_amount: 150,
      brand: "CarBrandTest",
      category_id: "Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car4",
    });

    expect(cars).toEqual([car]);
  });
});
