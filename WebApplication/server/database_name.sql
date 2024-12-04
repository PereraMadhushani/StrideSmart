-- MySQL dump 10.13  Distrib 9.0.1, for Win64 (x86_64)
--
-- Host: localhost    Database: stridesmart
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'A-001','perera','1234abc','matara',761662186,'piyumi@gmail.com','image_1730352975510.jpg'),(2,'A-002','perera','1234abc','matara',761662186,'piyumi@gmail.com','image_1730379987943.jpg'),(3,'A-003','perera','1234abc','matara',761662186,'piyumi@gmail.com','image_1730438330199.jpg');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `d_id` int(10) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (25,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309117340.jpg'),(26,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309117340.jpg'),(27,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309123420.jpg'),(28,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309123420.jpg'),(29,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309168759.jpg'),(30,'D-004','hansika','matara',761662186,'piyumi@gmail.com','image_1730309168759.jpg'),(31,'D-005','hansika','matara',761662186,'piyumi@gmail.com','image_1730310800823.jpg'),(32,'D-005','hansika','matara',761662186,'piyumi@gmail.com','image_1730310800823.jpg'),(33,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730310869218.jpg'),(34,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730310869218.jpg'),(35,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311045868.jpg'),(36,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311045868.jpg'),(37,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311196414.jpg'),(38,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311196414.jpg'),(39,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311527886.jpg'),(40,'D-006','hansika','matara',761662186,'piyumi@gmail.com','image_1730311527886.jpg'),(41,'D-007','chamara','matara',761662186,'piyumi@gmail.com','image_1730343453164.jpg'),(42,'D-007','chamara','matara',761662186,'piyumi@gmail.com','image_1730343453164.jpg'),(43,'D-008','chamara','matara',761662186,'piyumi@gmail.com','image_1730343530053.jpg'),(44,'D-008','chamara','matara',761662186,'piyumi@gmail.com','image_1730343530053.jpg'),(45,'D-009','anuradha','matara',761662186,'piyumi@gmail.com','image_1730343722795.jpg'),(46,'D-009','anuradha','matara',761662186,'piyumi@gmail.com','image_1730343722795.jpg'),(47,'D-010','sithum','matara',761662186,'piyumi@gmail.com','image_1730343791384.jpg'),(48,'D-010','sithum','matara',761662186,'piyumi@gmail.com','image_1730343791384.jpg'),(49,'D-011','sithum','matara',761662186,'piyumi@gmail.com','image_1730343847074.jpg'),(50,'D-011','sithum','matara',761662186,'piyumi@gmail.com','image_1730343847074.jpg'),(51,'D-012','anuradha','matara',761662186,'piyumi@gmail.com','image_1730344024198.jpg'),(52,'D-012','anuradha','matara',761662186,'piyumi@gmail.com','image_1730344024198.jpg'),(53,'D-013','tinusha','matara',761662186,'piyumi@gmail.com','image_1730344243753.jpg'),(54,'D-013','tinusha','matara',761662186,'piyumi@gmail.com','image_1730344243753.jpg'),(55,'D-013','tinusha','matara',761662186,'piyumi@gmail.com','image_1730344288128.jpg'),(56,'D-013','tinusha','matara',761662186,'piyumi@gmail.com','image_1730344288128.jpg'),(57,'D-014','perera','matara',761662186,'piyumi@gmail.com','image_1730344373953.jpg'),(58,'D-014','perera','matara',761662186,'piyumi@gmail.com','image_1730344373953.jpg'),(59,'D-015','Madhushani','matara',761662186,'piyumi@gmail.com','image_1730345481597.jpg'),(60,'D-015','Madhushani','matara',761662186,'piyumi@gmail.com','image_1730345481597.jpg'),(61,'D-016','Madhusha','matara',761662186,'piyumi@gmail.com','image_1730345567681.jpg'),(62,'D-016','Madhusha','matara',761662186,'piyumi@gmail.com','image_1730345567681.jpg');
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `e_id` int(10) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`e_id`),
  KEY `regNumber` (`regNumber`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (66,'E-004','nuwani','matara',765432123,'nuwani@gmail.com','image_1730298688136.jpg'),(68,'E-002','piyumi','matara',761662186,'piyumi@gmail.com','image_1730299020826.jpg'),(69,'E-002','piyumi','matara',761662186,'piyumi@gmail.com','image_1730299020826.jpg'),(70,'E-005','vidusha','badulla',760001924,'vidhusha@gmail.com','image_1730306561772.jpg'),(71,'E-005','vidusha','badulla',760001924,'vidhusha@gmail.com','image_1730306561772.jpg'),(72,'E-006','piyumi','matara',761662186,'piyumi@gmail.com','image_1730306644086.jpg'),(73,'E-006','piyumi','matara',761662186,'piyumi@gmail.com','image_1730306644086.jpg'),(74,'E-007','bagya','matara',761662186,'piyumi@gmail.com','image_1730307185888.jpg'),(75,'E-007','bagya','matara',761662186,'piyumi@gmail.com','image_1730307185888.jpg'),(76,'E-008','dinithi','matara',761662186,'piyumi@gmail.com','image_1730307910965.jpg'),(77,'E-008','dinithi','matara',761662186,'piyumi@gmail.com','image_1730307910965.jpg'),(78,'E-009','diwya','matara',761662186,'piyumi@gmail.com','image_1730308324682.jpg'),(79,'E-009','diwya','matara',761662186,'piyumi@gmail.com','image_1730308324682.jpg'),(80,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308374806.jpg'),(81,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308374806.jpg'),(82,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308388554.jpg'),(83,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308388554.jpg'),(84,'E-010','umeshan','matara',761662186,'piyumi@gmail.com','image_1730308471806.jpg'),(85,'E-010','umeshan','matara',761662186,'piyumi@gmail.com','image_1730308471806.jpg');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeanalyze`
--

DROP TABLE IF EXISTS `employeeanalyze`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeanalyze` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `e_id` varchar(10) NOT NULL,
  `complete_orders` int(255) NOT NULL,
  `waiting_orders` int(255) NOT NULL,
  `salary` int(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `e_id` (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeanalyze`
--

LOCK TABLES `employeeanalyze` WRITE;
/*!40000 ALTER TABLE `employeeanalyze` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeeanalyze` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaverequest`
--

DROP TABLE IF EXISTS `leaverequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaverequest` (
  `leave_id` int(30) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(5) NOT NULL,
  `date` date NOT NULL,
  `leave_date` date NOT NULL,
  `duration` int(5) NOT NULL,
  `status` enum('Pending','Approved','Rejected') NOT NULL,
  `manager_id` int(11) NOT NULL,
  PRIMARY KEY (`leave_id`),
  KEY `manager_id` (`manager_id`),
  KEY `leave_id` (`regNumber`) USING BTREE,
  KEY `regNumber` (`regNumber`),
  CONSTRAINT `fk_user_regNumber` FOREIGN KEY (`regNumber`) REFERENCES `user` (`regNumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaverequest`
--

LOCK TABLES `leaverequest` WRITE;
/*!40000 ALTER TABLE `leaverequest` DISABLE KEYS */;
INSERT INTO `leaverequest` VALUES (37,'E-004','2024-11-01','2024-11-15',3,'Approved',0);
/*!40000 ALTER TABLE `leaverequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `m_id` int(50) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`m_id`),
  KEY `user_id` (`regNumber`),
  KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (16,'M-001','wasana','ambalantota',701512917,'wasana@gmail.com','image_1730298329585.jpg'),(17,'M-001','wasana','ambalantota',701512917,'wasana@gmail.com','image_1730298329585.jpg'),(18,'M-001','wasana','ambalantota',701512917,'wasana@gmail.com','image_1730298358118.jpg'),(19,'M-001','wasana','ambalantota',701512917,'wasana@gmail.com','image_1730298358118.jpg'),(20,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308416129.jpg'),(21,'M-001','chamath','matara',761662186,'piyumi@gmail.com','image_1730308416129.jpg'),(22,'M-002','Madhusha','matara',761662186,'piyumi@gmail.com','image_1730345692679.jpg'),(23,'M-002','Madhusha','matara',761662186,'piyumi@gmail.com','image_1730345692679.jpg'),(24,'M-003','sadushi','matara',761662186,'piyumi@gmail.com','image_1730345728274.jpg'),(25,'M-003','sadushi','matara',761662186,'piyumi@gmail.com','image_1730345728274.jpg'),(26,'M-004','rashini','matara',761662186,'piyumi@gmail.com','image_1730347183919.jpg'),(27,'M-004','rashini','matara',761662186,'piyumi@gmail.com','image_1730347183919.jpg'),(28,'M-005','dinithi','matara',761662186,'piyumi@gmail.com','image_1730347447577.jpg'),(29,'M-005','dinithi','matara',761662186,'piyumi@gmail.com','image_1730347447577.jpg'),(30,'M-006','hashini','matara',761662186,'piyumi@gmail.com','image_1730347547545.jpg'),(31,'M-006','hashini','matara',761662186,'piyumi@gmail.com','image_1730347547545.jpg'),(32,'M-007','taniya','matara',761662186,'piyumi@gmail.com','image_1730348162676.jpg'),(33,'M-007','taniya','matara',761662186,'piyumi@gmail.com','image_1730348162676.jpg'),(34,'M-008','patirana','matara',761662186,'piyumi@gmail.com','image_1730348352716.jpg'),(35,'M-008','patirana','matara',761662186,'piyumi@gmail.com','image_1730348352716.jpg'),(36,'M-009','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348580065.jpg'),(37,'M-009','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348580065.jpg'),(38,'M-010','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348842021.jpg'),(39,'M-010','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348842021.jpg'),(40,'M-011','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348896672.jpg'),(41,'M-011','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348896672.jpg'),(42,'M-011','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348936129.jpg'),(43,'M-011','indeewari','matara',761662186,'piyumi@gmail.com','image_1730348936129.jpg'),(44,'M-012','indeewari','matara',761662186,'piyumi@gmail.com','image_1730350594032.jpg'),(45,'M-012','indeewari','matara',761662186,'piyumi@gmail.com','image_1730350594032.jpg'),(46,'M-013','madu','matara',761662186,'piyumi@gmail.com','image_1730351742213.jpg'),(47,'M-013','madu','matara',761662186,'piyumi@gmail.com','image_1730351742213.jpg'),(48,'M-014','perera','matara',761662186,'piyumi@gmail.com','image_1730352459004.jpg'),(49,'M-014','perera','matara',761662186,'piyumi@gmail.com','image_1730352459004.jpg'),(50,'A-001','perera','matara',761662186,'piyumi@gmail.com','image_1730352552614.jpg'),(51,'A-001','perera','matara',761662186,'piyumi@gmail.com','image_1730352552614.jpg'),(52,'M-015','piyumi','tissa',761662186,'piyumi@gmail.com','image_1730382197971.jpg'),(53,'M-015','piyumi','1234abc',0,'piyumi@gmail.com','0761662186');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `status` enum('unread','read') DEFAULT 'unread',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`notification_id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,99,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(2,123,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(3,124,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(4,125,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(5,126,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(6,127,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(7,128,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(8,129,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(9,130,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(10,131,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(11,132,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(12,133,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(13,134,'New user indeewari has been registered as a manager.','unread','2024-10-31 04:56:34'),(14,99,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(15,123,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(16,124,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(17,125,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(18,126,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(19,127,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(20,128,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(21,129,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(22,130,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(23,131,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(24,132,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(25,133,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(26,134,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(27,135,'New user madu has been registered as a manager.','unread','2024-10-31 05:15:42'),(28,99,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(29,123,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(30,124,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(31,125,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(32,126,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(33,127,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(34,128,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(35,129,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(36,130,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(37,131,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(38,132,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(39,133,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(40,134,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(41,135,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(42,136,'New user perera has been registered as a manager.','unread','2024-10-31 05:27:39'),(43,99,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(44,123,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(45,124,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(46,125,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(47,126,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(48,127,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(49,128,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(50,129,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(51,130,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(52,131,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(53,132,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(54,133,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(55,134,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(56,135,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(57,136,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(58,137,'New user perera has been registered as a manager.','unread','2024-10-31 05:29:13'),(59,99,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(60,123,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(61,124,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(62,125,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(63,126,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(64,127,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(65,128,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(66,129,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(67,130,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(68,131,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(69,132,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(70,133,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:15'),(71,134,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:16'),(72,135,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:16'),(73,136,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:16'),(74,137,'New user perera has been registered as a admin.','unread','2024-10-31 05:36:16'),(75,99,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(76,123,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(77,124,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(78,125,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(79,126,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(80,127,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(81,128,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(82,129,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(83,130,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(84,131,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(85,132,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(86,133,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(87,134,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(88,135,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(89,136,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(90,137,'New user perera has been registered as a admin.','unread','2024-10-31 13:06:28'),(91,99,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(92,123,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(93,124,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(94,125,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(95,126,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(96,127,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(97,128,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(98,129,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(99,130,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(100,131,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(101,132,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(102,133,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(103,134,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(104,135,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(105,136,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(106,137,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(107,143,'New user piyumi has been registered as a manager.','unread','2024-10-31 13:43:18'),(108,99,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(109,123,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(110,124,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(111,125,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(112,126,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(113,127,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(114,128,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(115,129,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(116,130,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(117,131,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(118,132,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(119,133,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(120,134,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(121,135,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(122,136,'New user umeshan has been registered as a storemanager.','unread','2024-11-01 04:20:10'),(123,99,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(124,123,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(125,124,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(126,125,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(127,126,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(128,127,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(129,128,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(130,129,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(131,130,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(132,131,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(133,133,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(134,134,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(135,135,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(136,136,'New user perera has been registered as a admin.','unread','2024-11-01 05:18:50'),(137,99,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:18'),(138,123,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:18'),(139,124,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:18'),(140,125,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(141,126,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(142,127,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(143,128,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(144,129,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(145,130,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(146,131,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(147,133,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(148,134,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(149,135,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19'),(150,136,'New user somapala has been registered as a storemanager.','unread','2024-11-01 17:17:19');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(11) NOT NULL,
  `dueDate` date NOT NULL,
  `qty` varchar(30) NOT NULL,
  `status` enum('Pending','Completed','','') NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `regNumber` (`regNumber`),
  CONSTRAINT `fk_regNumber` FOREIGN KEY (`regNumber`) REFERENCES `employee` (`regNumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_material`
--

DROP TABLE IF EXISTS `request_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_material` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `regNumber` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `raw_material` text DEFAULT NULL,
  `required_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `emp_id` (`regNumber`),
  KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_material`
--

LOCK TABLES `request_material` WRITE;
/*!40000 ALTER TABLE `request_material` DISABLE KEYS */;
INSERT INTO `request_material` VALUES (1,'2024-11-01','E001','John Doe','123 Main St','Steel - 10 kg','2024-11-15','2024-11-01 05:33:37'),(2,'2024-11-08','E-004','chirantha','gampaha','button','2024-11-09','2024-11-01 05:54:16'),(3,'2024-11-02','E-004','chirANTHA','GAMPAHA','FABRIC','2024-11-16','2024-11-01 05:59:32'),(4,'2024-11-01','E001','John Doe','123 Main St','Steel - 10 kg','2024-11-15','2024-11-01 09:00:58'),(5,'2024-11-01','E-005','chalani','rathnapura','button\nfabric','2024-11-09','2024-11-01 09:15:47'),(6,'2024-11-01','E001','John Doe','123 Main St','Steel - 10 kg','2024-11-15','2024-11-02 01:31:17');
/*!40000 ALTER TABLE `request_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary` (
  `salary_id` int(11) NOT NULL AUTO_INCREMENT,
  `regNumber` int(11) NOT NULL,
  `net_salary` decimal(10,2) NOT NULL,
  PRIMARY KEY (`salary_id`),
  KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary`
--

LOCK TABLES `salary` WRITE;
/*!40000 ALTER TABLE `salary` DISABLE KEYS */;
INSERT INTO `salary` VALUES (1,0,500.00),(2,0,700.00),(3,0,7800.00),(4,0,10100.00),(5,0,12400.00),(6,0,12400.00),(7,0,12400.00),(8,0,12400.00),(9,0,12400.00);
/*!40000 ALTER TABLE `salary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary_slip`
--

DROP TABLE IF EXISTS `salary_slip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary_slip` (
  `salarySlip_id` int(10) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(20) NOT NULL,
  `name` int(140) NOT NULL,
  `bank_name` int(50) NOT NULL,
  `accountNumber` int(30) NOT NULL,
  `month` enum('January','February','March','April','May','June','July','August','September','October','November','December') NOT NULL,
  `netSalary` int(10) NOT NULL,
  PRIMARY KEY (`salarySlip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary_slip`
--

LOCK TABLES `salary_slip` WRITE;
/*!40000 ALTER TABLE `salary_slip` DISABLE KEYS */;
/*!40000 ALTER TABLE `salary_slip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoeproduction`
--

DROP TABLE IF EXISTS `shoeproduction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoeproduction` (
  `production_id` int(11) NOT NULL AUTO_INCREMENT,
  `regNumber` int(11) NOT NULL,
  `shoe_type` varchar(50) NOT NULL,
  `size` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_amount` decimal(10,2) GENERATED ALWAYS AS (`unit_price` * `quantity`) STORED,
  PRIMARY KEY (`production_id`),
  KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoeproduction`
--

LOCK TABLES `shoeproduction` WRITE;
/*!40000 ALTER TABLE `shoeproduction` DISABLE KEYS */;
INSERT INTO `shoeproduction` (`production_id`, `regNumber`, `shoe_type`, `size`, `unit_price`, `quantity`) VALUES (1,0,'Sneakers',10,50.00,2),(2,0,'upper case',5,100.00,2),(3,0,'flat',5,100.00,2),(4,0,'flat',5,100.00,2),(5,0,'upper',4,400.00,12),(6,0,'upper',3,100.00,23),(7,0,'upper',3,100.00,23),(8,0,'upper',3,100.00,23);
/*!40000 ALTER TABLE `shoeproduction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storemanager`
--

DROP TABLE IF EXISTS `storemanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storemanager` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`s_id`),
  KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storemanager`
--

LOCK TABLES `storemanager` WRITE;
/*!40000 ALTER TABLE `storemanager` DISABLE KEYS */;
INSERT INTO `storemanager` VALUES (35,'S-002','taniya','taniya@gmail.com','abilipitiya',761234567,'image_1730297296528.jpg'),(36,'S-002','taniya','taniya@gmail.com','abilipitiya',761234567,'image_1730297296528.jpg'),(37,'E-003','chirantha','chira@gmail.com','gampaha',761662186,'image_1730297916109.jpg'),(38,'E-004','madhu','madhu@gmail.com','hambantota',761662186,'image_1730298138677.jpg'),(39,'E-004','nuwani','nuwani@gmail.com','matara',765432123,'image_1730298688136.jpg'),(40,'E-002','piyumi','piyumi@gmail.com','matara',761662186,'image_1730299020826.jpg'),(41,'E-005','vidusha','vidhusha@gmail.com','badulla',760001924,'image_1730306561772.jpg'),(42,'E-006','piyumi','piyumi@gmail.com','matara',761662186,'image_1730306644086.jpg'),(43,'E-007','bagya','piyumi@gmail.com','matara',761662186,'image_1730307185888.jpg'),(44,'E-008','dinithi','piyumi@gmail.com','matara',761662186,'image_1730307910965.jpg'),(45,'E-009','diwya','piyumi@gmail.com','matara',761662186,'image_1730308324682.jpg'),(46,'M-001','chamath','piyumi@gmail.com','matara',761662186,'image_1730308374806.jpg'),(47,'M-001','chamath','piyumi@gmail.com','matara',761662186,'image_1730308388554.jpg'),(48,'E-010','umeshan','piyumi@gmail.com','matara',761662186,'image_1730308471806.jpg'),(49,'S-001','umeshan','umeshan@gmail.com','polonnaruwa',987654321,'image_1730434809917.jpg'),(50,'S-001','umeshan','umeshan@gmail.com','1234abc',0,'0987654321'),(51,'S-002','somapala','piyumi@gmail.com','matara',761662186,'image_1730481437903.jpg'),(52,'S-002','somapala','piyumi@gmail.com','1234abc',0,'0761662186');
/*!40000 ALTER TABLE `storemanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `regNumber` varchar(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `role` enum('manager','storemanager','employee','driver','admin') NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` int(10) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `regNumber` (`regNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (87,'E-004','madhu','employee','$2b$10$JwHaBiecUVuThYlbDVj8kO4v/.6Fjrro5m1w7aCdmGqntzN5Bvskq','madhu@gmail.com','hambantota',761662186,'image_1730298138677.jpg'),(91,'E-002','piyumi','employee','$2b$10$MfMahr6TcUHh/a47D6XJh.8Ws2udMuI0aG4YNmuNVTvQDOVy1AiI6','piyumi@gmail.com','matara',761662186,'image_1730299020826.jpg'),(94,'E-007','bagya','employee','$2b$10$cRX91Er5hZZabzz/FRaJAew/PGac4R8kxhzbApd5.j/FdJGviI.WW','piyumi@gmail.com','matara',761662186,'image_1730307185888.jpg'),(95,'E-008','dinithi','employee','$2b$10$lq4XCry25goi8PvihzETW.072C1fdpAtLAyVURRLHYDuUBldizFC6','piyumi@gmail.com','matara',761662186,'image_1730307910965.jpg'),(96,'E-009','diwya','employee','$2b$10$GRl99n1d.1jJiopWYbzPK.6B3xUCPF6IVYf.jSUpkPOgfPkw.dtHm','piyumi@gmail.com','matara',761662186,'image_1730308324682.jpg'),(99,'M-001','chamath','manager','$2b$10$3b.SS2X6C07oYMismAjCAu5fFmZgo7GXtu9BNS36RbbvyB7t2KnEW','piyumi@gmail.com','matara',761662186,'image_1730308416129.jpg'),(100,'E-010','umeshan','employee','$2b$10$PENWdGPBpDWEm3ZuTiGcO.s8mvXUP5IF8nU0NdEe2mg.Hs55YHWFW','piyumi@gmail.com','matara',761662186,'image_1730308471806.jpg'),(101,'D-002','adhikari','driver','$2b$10$2KK7wwTbvkhlGJ0EcmJQQeSJoab3GcuT0vnR1vnHXRaKfWQV2i09e','piyumi@gmail.com','matara',761662186,'image_1730308968649.jpg'),(102,'D-003','fernando','driver','$2b$10$O8c5eV9gjVnO23rlk18rkuqfvSqTtuosJMuTJglIiB592G7xg6giy','piyumi@gmail.com','matara',761662186,'image_1730309024449.jpg'),(106,'D-004','hansika','driver','$2b$10$k60LiYVX4UPq8rlKs8kWl.cOhKX0SKKvH0r1XEKsQtHLe84hxig8.','piyumi@gmail.com','matara',761662186,'image_1730309168759.jpg'),(107,'D-005','hansika','driver','$2b$10$MmNdWiCLYBkk61rKQAaodedm5tQCsuKfUBJAemngEXo1oCHaBjSry','piyumi@gmail.com','matara',761662186,'image_1730310800823.jpg'),(108,'D-006','hansika','driver','$2b$10$XMwjNSaO7mtMHnTJMVMfEuOceRijQcWT1u8uO9FZGuFenYuewWLYa','piyumi@gmail.com','matara',761662186,'image_1730310869218.jpg'),(112,'D-007','chamara','driver','$2b$10$4NtLtkO6zb5Gga9BgLKbEuuZth.FBYrTlqAdV5rN6J9Z5TuotiGYe','piyumi@gmail.com','matara',761662186,'image_1730343453164.jpg'),(113,'D-008','chamara','driver','$2b$10$CtB3rbQr520DdXhbFCOGAeqTAzOEAXgzxAYGjVCkJrCxLA.OXDZ5e','piyumi@gmail.com','matara',761662186,'image_1730343530053.jpg'),(114,'D-009','anuradha','driver','$2b$10$inuki/G9wEMrxCSnxirPme4ZFYP4DZ0pBxLrpk8Nox4Rz48JUjZ.y','piyumi@gmail.com','matara',761662186,'image_1730343722795.jpg'),(115,'D-010','sithum','driver','$2b$10$Y7G0JtyXk/PoAx7Zhr5KXueMGT/TTphjfySOFc.WvUBVo/sZJp1fe','piyumi@gmail.com','matara',761662186,'image_1730343791384.jpg'),(116,'D-011','sithum','driver','$2b$10$/0Ar8ctK/pSZwoFv5g7t7.Nej5ClunaTel8nhztD/k5xAOd98R/qC','piyumi@gmail.com','matara',761662186,'image_1730343847074.jpg'),(117,'D-012','anuradha','driver','$2b$10$thjIncfOAhoO/upvBhWjQ.CNKyHQ6XLVVUQ153ZIKKl4Xou8QLRzK','piyumi@gmail.com','matara',761662186,'image_1730344024198.jpg'),(119,'D-013','tinusha','driver','$2b$10$9mX9EOaxCtK9S6565t87fuv2d4WjX7v1EZQ.15/xs991J2/0L732C','piyumi@gmail.com','matara',761662186,'image_1730344288128.jpg'),(120,'D-014','perera','driver','$2b$10$TuiON6K6rBovroCvOj6emen5lpe6zoqrwQbsOsy7TiTn8OIYiO7a.','piyumi@gmail.com','matara',761662186,'image_1730344373953.jpg'),(121,'D-015','Madhushani','driver','$2b$10$0YQveAvdzH01XGkfIY5FqOcaJFalnDysAV0NrbRU7OBLvm8LLvCt.','piyumi@gmail.com','matara',761662186,'image_1730345481597.jpg'),(122,'D-016','Madhusha','driver','$2b$10$Ycvjv88A.wUhFXSZoABWV.IMmXvsxD4hfNwLxFmPZ3XdfTVk2Hdym','piyumi@gmail.com','matara',761662186,'image_1730345567681.jpg'),(123,'M-002','Madhusha','manager','$2b$10$7eQoNjXcgoyRCecXFRBkS.fAoCN86pGCqTs9FY6uTbYtucAfizxwu','piyumi@gmail.com','matara',761662186,'image_1730345692679.jpg'),(124,'M-003','sadushi','manager','$2b$10$250I3O2dpckTu4x8erZ4W.FLKKU9/blXL1VZh7LXMYC3shiv/jj3i','piyumi@gmail.com','matara',761662186,'image_1730345728274.jpg'),(125,'M-004','rashini','manager','$2b$10$U5NFkDi176PO9KeHQy7M.OTa9j0aEhiGUm.DxZGvgjiHIQym7hhlG','piyumi@gmail.com','matara',761662186,'image_1730347183919.jpg'),(126,'M-005','dinithi','manager','$2b$10$tsoaHPC.jIGCMpfJYJTfYOb4clqTcFNzwtVjp.kJesf6kuGibhyPa','piyumi@gmail.com','matara',761662186,'image_1730347447577.jpg'),(127,'M-006','hashini','manager','$2b$10$hDRm7UGZgSplrEqaf724LuLApTsYrOBuVat3agdbpn5lsWkZAAQta','piyumi@gmail.com','matara',761662186,'image_1730347547545.jpg'),(128,'M-007','taniya','manager','$2b$10$VvER3nQakD2GiGoNpazp7.FSUsKjeCV17lFUBGURrXRa8Qz3tGCVa','piyumi@gmail.com','matara',761662186,'image_1730348162676.jpg'),(129,'M-008','patirana','manager','$2b$10$/U5Aw7Hp3Q3x3R4rXyaNmuijY6h8m2nuVALhG2P/iJrw2q6PY0xjW','piyumi@gmail.com','matara',761662186,'image_1730348352716.jpg'),(130,'M-009','indeewari','manager','$2b$10$uo1W4Pr.Xa8L97O1gRRNgeq4fdCz4WQ7rbFF7X26eClTp8L6GAwvq','piyumi@gmail.com','matara',761662186,'image_1730348580065.jpg'),(131,'M-010','indeewari','manager','$2b$10$7xh0snbH/Z9FUlkz68HvM.inLJcVE53GaVvfWad3NN4fPaH0bnOHu','piyumi@gmail.com','matara',761662186,'image_1730348842021.jpg'),(133,'M-011','indeewari','manager','$2b$10$Mdd/YbTTv7DPATC5c5vOC.OEaDx0VBV0xqZ.ODyuZOBGZh7NQLkJG','piyumi@gmail.com','matara',761662186,'image_1730348936129.jpg'),(134,'M-012','indeewari','manager','$2b$10$f98uyGfllR/6t1C7K59GBeG/dSCmVwKrHO0wMNzvyugQHBZa3uU1O','piyumi@gmail.com','matara',761662186,'image_1730350594032.jpg'),(135,'M-013','madu','manager','$2b$10$AU44dlORbqyqkRlt2Ei/fOZJvQpjsC4eILqBqaD9zsq0yU4eXoRlC','piyumi@gmail.com','matara',761662186,'image_1730351742213.jpg'),(136,'M-014','perera','manager','$2b$10$BKZ0X5Zu/ezne0Lh.2UeW.yfxLdafDAIxjkjk7O1NRZIHrBLXEeRa','piyumi@gmail.com','matara',761662186,'image_1730352459004.jpg'),(142,'A-002','perera','admin','$2b$10$afr9jGiZ2vjzxR6etYLnv.hZjwZau1JFtkKCrf.HtMFHHpjMsUkd.','piyumi@gmail.com','matara',761662186,'image_1730379987943.jpg'),(145,'S-001','umeshan','storemanager','$2b$10$Ls7o5Cngakwl5oNZ3gDTzOGRxROOS2RE4f2hHmC9ZADowqUMN3y3G','umeshan@gmail.com','polonnaruwa',987654321,'image_1730434809917.jpg'),(146,'A-003','perera','admin','$2b$10$dQZdeUA/oPheyIV0gdEr3uQXO/91nrfz.X.Nbk4glxlatLNmMsMHq','piyumi@gmail.com','matara',761662186,'image_1730438330199.jpg'),(147,'S-002','somapala','storemanager','$2b$10$Tc6XGQkLpkw8LjD8qhg2yufIZOtAFN01OzHwzy3TPiWbwTC2ypsTa','piyumi@gmail.com','matara',761662186,'image_1730481437903.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_user_insert
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- Check if the new user has the role 'employee'
    IF NEW.role = 'employee' THEN
        -- Insert the user's details into the employee table
        INSERT INTO employee (regNumber, name, email, address, contact_number, image)
        VALUES (NEW.regNumber, NEW.name, NEW.email, NEW.address, NEW.contact_number, NEW.image);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_user_insert1
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- Check if the new user has the role 'driver'
    IF NEW.role = 'driver' THEN
        -- Insert the user's details into the employee table
        INSERT INTO driver (regNumber, name, email, address, contact_number, image)
        VALUES (NEW.regNumber, NEW.name, NEW.email, NEW.address, NEW.contact_number, NEW.image);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_user_insert2
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- Check if the new user has the role 'storemanager'
    IF NEW.role = 'employee' THEN
        -- Insert the user's details into the employee table
        INSERT INTO storemanager (regNumber, name, email, address, contact_number, image)
        VALUES (NEW.regNumber, NEW.name, NEW.email, NEW.address, NEW.contact_number, NEW.image);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_user_insert3
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- Check if the new user has the role 'storemanager'
    IF NEW.role = 'storemanager' THEN
        -- Insert the user's details into the employee table
        INSERT INTO storemanager (regNumber, name, email, address, contact_number, image)
        VALUES (NEW.regNumber, NEW.name, NEW.email, NEW.address, NEW.contact_number, NEW.image);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER after_user_insert4
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    -- Check if the new user has the role 'manager'
    IF NEW.role = 'manager' THEN
        -- Insert the user's details into the employee table
        INSERT INTO manager (regNumber, name, email, address, contact_number, image)
        VALUES (NEW.regNumber, NEW.name, NEW.email, NEW.address, NEW.contact_number, NEW.image);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-02 15:48:27
