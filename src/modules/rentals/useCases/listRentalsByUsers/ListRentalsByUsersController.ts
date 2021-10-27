import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListRentalsByUsersUseCase } from "./ListRentalsByUsersUseCase";

class ListRentalsByUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listRentalsByUsersUseCase = container.resolve(
      ListRentalsByUsersUseCase
    );

    const rentals = await listRentalsByUsersUseCase.execute(id);

    return response.json(rentals);
  }
}

export { ListRentalsByUsersController };
