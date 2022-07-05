CREATE DATABASE login;
USE login;

CREATE TABLE `login`.`usuario` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`usuario_id`));

INSERT INTO `usuario` (`usuario_id`,`usuario`,`senha`) VALUES (1,'admin','e6a0c99a0f17d0b0aa1943aec9ffd757');
INSERT INTO `usuario` (`usuario_id`,`usuario`,`senha`) VALUES (1,'teste','698dc19d489c4e4db73e28a713eab07b');