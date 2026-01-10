"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userXController_1 = require("../controllers/userXController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/register', userXController_1.registerUser);
router.post('/login', userXController_1.loginUser);
router.get('/profile/:id', userXController_1.getProfile);
router.put('/update', authMiddleware_1.protect, userXController_1.updateUser);
router.delete('/delete', authMiddleware_1.protect, userXController_1.deleteUser);
exports.default = router;
