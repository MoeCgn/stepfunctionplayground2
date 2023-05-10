import crypto from "crypto";

export const cipher = (text, key, iv, algorithm = 'aes256') => {
  const c = crypto.createCipheriv(algorithm, key, iv);
  return c.update(text, 'utf8', 'hex') + c.final('hex');
};

export const decipher = (encrypted, key, iv, algorithm = 'aes256') => {
  const d = crypto.createDecipheriv(algorithm, key, iv);
  return d.update(encrypted, 'hex', 'utf8') + d.final('utf8');
};
