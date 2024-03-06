import { Request, Response, NextFunction } from 'express';
import  util from '../utils/index'; 

export async function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Token not provided' });
    return; 
  }

  try {
    const decoded = util.authToken(token); // Assuming authToken function is defined in util
    // Declaração da propriedade 'user' no Request
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
    return; // Retorna após enviar a resposta
  }
}

