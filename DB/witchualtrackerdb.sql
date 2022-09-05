-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema witchualtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `witchualtrackerdb` ;

-- -----------------------------------------------------
-- Schema witchualtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `witchualtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `witchualtrackerdb` ;

-- -----------------------------------------------------
-- Table `ritual`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ritual` ;

CREATE TABLE IF NOT EXISTS `ritual` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NULL,
  `properties` VARCHAR(2000) NULL,
  `intentions` VARCHAR(2000) NULL,
  `words` VARCHAR(2000) NULL,
  `ingredients` VARCHAR(2000) NULL,
  `instructions` TEXT NULL,
  `idealtime` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS witchyuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'witchyuser'@'localhost' IDENTIFIED BY 'witchyuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'witchyuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `ritual`
-- -----------------------------------------------------
START TRANSACTION;
USE `witchualtrackerdb`;
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (1, 'MoonWater', 'Can be used for any ritual that requires water, like baths, coffee, watering plants, wash your crystals, add to potions or elixirs, use an a water element on an alter, and so on. ', 'Moon water is made with any intention that you put towards it. ', '\"Spirits of the four directions, turn the wheel and braid connections. Send your power to the skies. By the moonlight magic flies.\"', 'Lidded glass jar filled with water. ', 'Fill a lidded glass jar with water and close it. Place the jar under the full moon and surround the jar with crystals, charms, or herbs that match your intentions. You can draw sigils on the jar to help focus your energy and intention. Leave your jar outside overnight during a full moon, make sure the moonlight is visible to the jar. ', 'Full moon.');
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (2, 'Money Spell', 'Ease unexpected financial strain.', 'Stressfree financial burden.', '\"Sweet basil, with energy divine, bring the money I need to me, right on time.\"', '1 fresh basil leaf, 1 green candle, purse or wallet.', 'Three deep breaths. Inhale through nose, and exhale fully through mouth. Relase any negative thoughts or emotions. Light a candle and place your purse or wallet infront of you on your alter.  Hold the basil leaf between your palms and visualize a green light surrounding your purse or wallet. Let the green light wash over you. Imagine your purse or wallet full of money. See yourself opening it and find it full of coins and bills. When you see this image in your mind say the following words: \"Swwet basil, with energy divine, bring the money I need to me, right on time.\" Now place the basil leaf inside your purse or wallet. Extinguish your candle by waving your hand over it. Leave the leaf inside your purse or wallet for up to one week. Be careful not to stress about how the money will show up in you life, it will interfere with manifestation. ', 'During financial hardship.');
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (3, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (4, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (5, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (6, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (7, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (8, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (9, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (10, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (11, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (12, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (13, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (14, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (15, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (16, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (17, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (18, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (19, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ritual` (`id`, `name`, `properties`, `intentions`, `words`, `ingredients`, `instructions`, `idealtime`) VALUES (20, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;

