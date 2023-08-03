import { handleError } from "./handleErrors.middleware";
import { userIdExists } from "./userIdExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueNameCategory } from "./uniqueNameCategory.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { categoryIdExists } from "./categoryIdExists.middleware";
import { uniqueAddress } from "./uniqueAddress.middleware";
import { verifyTimeIsValid } from "./verifyTimeIsValid.middleware";
import { verifyRealEstateIdExists } from "./verifyRealEstateIdExists.middleware";
import { verifyScheduleExists } from "./verifyScheduleExists.middleware";

export default {
  handleError,
  userIdExists,
  uniqueEmail,
  uniqueNameCategory,
  categoryIdExists,
  validateBody,
  verifyToken,
  isAdmin,
  isAdminOrOwner,
  uniqueAddress,
  verifyTimeIsValid,
  verifyRealEstateIdExists,
  verifyScheduleExists,
};
