/*
Navicat MySQL Data Transfer

Source Server         : db1808
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : lecuntao

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-14 08:52:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `sid` tinyint(10) NOT NULL,
  `goods_title` varchar(20) NOT NULL,
  `goods_price` varchar(10) NOT NULL,
  `goods_url` varchar(200) NOT NULL,
  `urls` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '草珊瑚清焱护龈健齿牙膏160克', '49.90', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');
INSERT INTO `goods` VALUES ('2', '【周年庆】舒蕾洗发露651ml', '29.90', 'https://img.lecuntao.com/data/upload/shop/store/goods/4578/2018/09/25/4578_05911836727730685_1280.jpg', 'https://img.lecuntao.com/data/upload/shop/store/goods/4578/2018/09/25/4578_05911836727730685_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');
INSERT INTO `goods` VALUES ('3', '洗发水', '119.90', 'https://img.lecuntao.com/data/upload/shop/store/goods/4753/2018/10/08/4753_05923267227879289_1280.jpg', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');
INSERT INTO `goods` VALUES ('4', '脚气膏', '20.00', 'https://img.lecuntao.com/data/upload/shop/store/goods/4750/2018/09/01/4750_05891083870426689_1280.jpg', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');
INSERT INTO `goods` VALUES ('5', '照明灯', '40.00', 'https://img.lecuntao.com/data/upload/shop/store/goods/4162/2018/10/08/4162_05923183119503978_1280.jpg', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');
INSERT INTO `goods` VALUES ('6', '补水的', '138.00', 'https://img.lecuntao.com/data/upload/shop/store/goods/3739/2017/12/11/3739_05663083155368436_1280.png', 'https://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/18/4736_05905469076998633_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862917773856680_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/07/30/4736_05862918294660101_1280.jpg,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907597168286250_1280.png,http://img.lecuntao.com/data/upload/shop/store/goods/4736/2018/09/20/4736_05907596935235550_1280.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(10) NOT NULL AUTO_INCREMENT,
  `userphone` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('6', '15557360607', '3647516', '2018-12-11 17:04:20');
INSERT INTO `user` VALUES ('7', '1014959288', '123456', '2018-12-11 17:35:02');
INSERT INTO `user` VALUES ('8', '13888888888', '123456', '2018-12-11 20:28:07');
INSERT INTO `user` VALUES ('9', '12345645', '123456', '2018-12-12 20:43:19');
INSERT INTO `user` VALUES ('10', '11111111111', '111111', '2018-12-13 15:02:01');
INSERT INTO `user` VALUES ('11', '12345678910', '<script>document.coo', '2018-12-13 18:52:56');
INSERT INTO `user` VALUES ('12', '12345678111', 'abc\"/><script>alert(', '2018-12-13 18:57:57');
