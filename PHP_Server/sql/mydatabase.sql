-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 03, 2023 at 08:18 AM
-- Server version: 10.11.2-MariaDB-1:10.11.2+maria~ubu2204
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--
CREATE DATABASE IF NOT EXISTS `mydatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydatabase`;

-- --------------------------------------------------------

--
-- Table structure for table `pasien`
--
DROP TABLE IF EXISTS `pasien`;

CREATE TABLE `pasien` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `sex` varchar(25) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `religion` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `nik` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien`
--

INSERT INTO `pasien` (`id`, `name`, `sex`, `phone`, `religion`, `address`, `nik`) VALUES
(1, 'Joko', 'Male', '02134567891011', 'Islam', 'Jalan', '01234578910'),
(2, 'Jaka', 'Male', '02134567891012', 'Islam', 'Jalan', '01234578911'),
(3, 'Jono', 'Male', '02134567891013', 'Islam', 'Jalan', '01234578912'),
(4, 'Jovi', 'Male', '02134567891014', 'Islam', 'Jalan', '01234578913'),
(5, 'Jojo', 'Female', '02134567891015', 'Islam', 'Jalan', '01234578914'),
(6, 'Rani', 'Female', '021456789101112', 'Islam', 'Jalan', '012345678915');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasien`
--
ALTER TABLE `pasien`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasien`
--
ALTER TABLE `pasien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
