import { Request, Response, NextFunction } from 'express';
import util from '../utils/index';

export async function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers['authorization'];

  console.log('dados req.headers', req.headers);
  console.log('authHeader', authHeader);

  if (!authHeader) {
    res.status(401).json({ error: 'Token not provided' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = util.authToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
    return;
  }
}
