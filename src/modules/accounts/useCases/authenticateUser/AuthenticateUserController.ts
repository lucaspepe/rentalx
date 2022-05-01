import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(resquest: Request, response: Response): Promise<Response> {
    const { password, email } = resquest.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
