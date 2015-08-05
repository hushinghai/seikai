-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 05, 2015 at 09:25 PM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `evenbolt2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `last_ip`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'pandiyaraja', '$2a$10$iXBKnkWesIvKfHMzV4T2IugzThU8SG7FjgF3JEgI0yO0zAGOi01kO', '127.0.0.1', '2015-08-05 10:22:15', '0000-00-00 00:00:00', '2015-08-05 04:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE IF NOT EXISTS `bookmarks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=96 ;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `event_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 3, 2, '2015-07-08 00:13:07', '2015-07-08 00:13:07'),
(3, 4, 2, '2015-07-09 00:52:20', '2015-07-09 00:52:20'),
(4, 5, 2, '2015-07-09 01:20:06', '2015-07-09 01:20:06'),
(5, 1, 1, '2015-07-09 05:31:27', '2015-07-09 05:31:27'),
(6, 2, 2, '2015-07-09 05:31:41', '2015-07-09 05:31:41'),
(7, 23, 2, '2015-07-14 03:31:46', '2015-07-14 03:31:46'),
(19, 53, 40, '2015-08-04 02:28:27', '2015-08-04 02:28:27'),
(20, 53, 40, '2015-08-04 02:28:30', '2015-08-04 02:28:30'),
(21, 11, 40, '2015-08-04 02:39:35', '2015-08-04 02:39:35'),
(22, 11, 40, '2015-08-04 02:39:37', '2015-08-04 02:39:37'),
(23, 11, 40, '2015-08-04 02:39:38', '2015-08-04 02:39:38'),
(24, 11, 40, '2015-08-04 02:41:51', '2015-08-04 02:41:51'),
(25, 11, 40, '2015-08-04 02:41:51', '2015-08-04 02:41:51'),
(26, 11, 40, '2015-08-04 02:41:55', '2015-08-04 02:41:55'),
(27, 11, 40, '2015-08-04 02:41:55', '2015-08-04 02:41:55'),
(28, 11, 40, '2015-08-04 02:41:55', '2015-08-04 02:41:55'),
(29, 11, 40, '2015-08-04 02:41:55', '2015-08-04 02:41:55'),
(30, 11, 40, '2015-08-04 02:41:56', '2015-08-04 02:41:56'),
(31, 11, 40, '2015-08-04 02:41:56', '2015-08-04 02:41:56'),
(32, 11, 40, '2015-08-04 02:42:09', '2015-08-04 02:42:09'),
(33, 11, 40, '2015-08-04 02:42:09', '2015-08-04 02:42:09'),
(34, 11, 40, '2015-08-04 02:42:15', '2015-08-04 02:42:15'),
(35, 11, 40, '2015-08-04 02:42:16', '2015-08-04 02:42:16'),
(36, 11, 40, '2015-08-04 02:45:06', '2015-08-04 02:45:06'),
(37, 11, 40, '2015-08-04 02:45:06', '2015-08-04 02:45:06'),
(38, 11, 40, '2015-08-04 02:45:08', '2015-08-04 02:45:08'),
(39, 11, 40, '2015-08-04 02:45:08', '2015-08-04 02:45:08'),
(40, 11, 40, '2015-08-04 02:45:10', '2015-08-04 02:45:10'),
(41, 11, 40, '2015-08-04 02:45:10', '2015-08-04 02:45:10'),
(42, 11, 40, '2015-08-04 02:45:17', '2015-08-04 02:45:17'),
(43, 11, 40, '2015-08-04 02:45:17', '2015-08-04 02:45:17'),
(46, 54, 40, '2015-08-04 02:52:47', '2015-08-04 02:52:47'),
(47, 54, 40, '2015-08-04 02:52:51', '2015-08-04 02:52:51'),
(48, 54, 40, '2015-08-04 02:52:52', '2015-08-04 02:52:52'),
(49, 54, 40, '2015-08-04 02:52:53', '2015-08-04 02:52:53'),
(50, 59, 40, '2015-08-04 02:55:36', '2015-08-04 02:55:36'),
(51, 59, 40, '2015-08-04 02:55:41', '2015-08-04 02:55:41'),
(52, 59, 40, '2015-08-04 02:55:42', '2015-08-04 02:55:42'),
(53, 59, 40, '2015-08-04 02:55:43', '2015-08-04 02:55:43'),
(54, 59, 40, '2015-08-04 02:55:49', '2015-08-04 02:55:49'),
(55, 59, 40, '2015-08-04 02:55:50', '2015-08-04 02:55:50'),
(56, 11, 47, '2015-08-04 05:44:44', '2015-08-04 05:44:44'),
(57, 11, 47, '2015-08-04 05:44:45', '2015-08-04 05:44:45'),
(58, 11, 47, '2015-08-04 05:44:46', '2015-08-04 05:44:46'),
(59, 11, 47, '2015-08-04 05:44:47', '2015-08-04 05:44:47'),
(65, 54, 47, '2015-08-04 05:52:30', '2015-08-04 05:52:30'),
(76, 11, 48, '2015-08-04 06:11:26', '2015-08-04 06:11:26'),
(95, 54, 48, '2015-08-04 06:34:21', '2015-08-04 06:34:21');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `category` int(11) NOT NULL,
  `event_type` int(11) NOT NULL,
  `user_created` int(11) NOT NULL,
  `venue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `start_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `end_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lat` float(8,2) NOT NULL,
  `lng` float(8,2) NOT NULL,
  `payment_fees` float(8,2) NOT NULL,
  `booking_fees_base` float(8,2) NOT NULL,
  `booking_fees` float(8,2) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=62 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `image_url`, `city`, `description`, `category`, `event_type`, `user_created`, `venue`, `start_date`, `end_date`, `start_time`, `end_time`, `lat`, `lng`, `payment_fees`, `booking_fees_base`, `booking_fees`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Medical Camp', '', 'Bengaluru', '', 1, 1, 1, 'Silkboard', '2015-06-27', '2015-06-27', '10:00pm', '2:00pm', 13.08, 80.27, 0.00, 0.00, 0.00, 0, '2015-06-26 07:06:28', '2015-06-26 07:06:28'),
(2, 'Medical Camp', 'nzlnnuszscatting.jpg', 'chennai', 'Medical Camp', 1, 1, 1, 'chrompet', '2015-06-27', '2015-06-27', '12:30am', '2:30am', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-06-26 07:25:45', '2015-06-26 07:25:45'),
(3, 'web', 'zvjm0injurl.png', 'Bangalore, Karnataka, India', 'web seminar in laravel framework.<br>', 4, 6, 2, 'HSR layout', '2015-07-09', '2015-07-09', '10:00am', '12:30am', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-08 00:12:27', '2015-07-08 00:12:27'),
(4, 'Medical health insurance', 'z3nz83uvmedical-logo-gold.png', 'Bengaluru ', 'Medical expenses are sky-rocketing! Get health insurance and cover your medical costs. With cashless hospitalization stay tension-free and cure yourself faster. Policy Bazaar will help you compare and find the best plan.', 1, 1, 2, 'Whitefield Railway Station, Maithri Layout, Bengaluru, Karnataka, India', '2015-07-30', '2015-07-30', '10:00am', '2:30pm', 13.00, 77.76, 0.00, 0.00, 0.00, 0, '2015-07-09 00:50:49', '2015-07-09 00:50:49'),
(5, 'Medical', 'acangnwvmedical.png', 'Silk Board, Koramangala 1st Block, Koramangala, Bengaluru, Karnataka, India', '<b><span style="color:rgb(0,0,255);">Smile Health Camps is one such special initiative of Smile Foundation to provide healthcare services to meet the immediate health care needs of the marginalized community in remote rural areas and slums through standalone camps. Customized health camps are organized extensively across the country offering comprehensive health services – curative, preventive, promotive and referral, to a large number of people in selected intervention areas. </span></b>\r\n', 1, 1, 2, 'Silk Board, Koramangala 1st Block, Koramangala, Bengaluru, Karnataka, India', '2015-07-11', '2015-07-11', '10:00am', '6:00pm', 12.92, 77.62, 0.00, 0.00, 0.00, 0, '2015-07-09 01:20:03', '2015-07-09 01:22:10'),
(6, 'Airline', '', 'Chennai', 'Airlines', 3, 3, 2, 'Chennai International Airport, Chennai, Tamil Nadu, India', '2015-07-14', '2015-07-14', '6:00am', '9:00am', 12.99, 80.17, 0.00, 0.00, 0.00, 0, '2015-07-09 04:16:09', '2015-07-09 04:16:09'),
(11, 'Medical', 'omny8x8hmedical-logo-gold.png', 'Bengaluru', 'Medical Insurance', 3, 3, 2, 'Bengaluru', '2015-08-14', '2015-08-14', '10:00am', '1:00pm', 12.99, 80.17, 0.00, 0.00, 0.00, 0, '2015-07-14 01:15:09', '2015-07-30 12:54:12'),
(13, 'xxx', '', 'jhjjh', 'jsgdjskhdf', 1, 1, 6, 'jjjjk', '2015-07-29', '2015-07-29', '12:30am', '2:30am', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-07-28 08:18:45', '2015-07-28 08:18:45'),
(14, 'dance', '', 'Bangalore, Karnataka, India', 'danceis great', 1, 1, 6, 'HSR Layout\r\nBengaluru, Karnataka', '2015-08-03', '2015-08-03', '12:30am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-28 08:28:12', '2015-07-28 08:28:12'),
(15, 'Seminar', '', 'Bangalore, Karnataka, India', '', 1, 1, 6, 'HSR Layout\r\nBengaluru, Karnataka', '2015-07-29', '2015-07-30', '09:30am', '2:30am', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-29 01:01:41', '2015-07-29 01:01:41'),
(16, 'xxxdd', '', 'jkhf', '', 1, 1, 6, 'kjh', '2015-07-29', '2015-07-29', '9:00am', '11:30pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-07-29 01:08:18', '2015-07-29 01:08:18'),
(17, 'yyytt', '', 'Bangalore, Karnataka, India', 'ssf', 1, 1, 6, 'HSR Layout\r\nBengaluru, Karnataka', '2015-07-29', '2015-07-29', '9:00am', '7:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-29 01:11:34', '2015-07-29 01:11:34'),
(18, 'gtre', '', 'Bangalore, Karnataka, India', '', 1, 1, 6, 'HSR Layout\r\nBengaluru, Karnataka', '2015-07-29', '2015-07-29', '9:15am', '11:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-29 01:43:45', '2015-07-29 01:43:45'),
(19, 'rrtt', '', 'Bangalore, Karnataka, India', '', 1, 1, 7, 'HSR Layout\r\nBengaluru, Karnataka', '2015-07-29', '2015-07-29', '1:00am', '10:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-29 05:24:20', '2015-07-30 10:13:50'),
(20, 'disco', '', 'Bangalore, Karnataka, India', 'disco enjoy', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-30', '2015-07-30', '11:00am', '1:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 09:12:58', '2015-07-30 12:56:13'),
(28, 'asdds', '', 'Bangalore, Karnataka, India', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-30', '2015-07-31', '2:30am', '2:30am', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 12:27:39', '2015-07-30 12:55:06'),
(34, 'green it', '', 'Bengaluru, Karnataka, India', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:30am', '7:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 13:53:39', '2015-07-30 13:53:39'),
(37, 'green it', '', '', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 14:00:17', '2015-07-30 14:00:17'),
(39, 'green it', '', '', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 14:01:32', '2015-07-30 14:01:32'),
(40, 'green it', '', '', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 14:03:14', '2015-07-30 14:03:14'),
(41, 'green it', '', '', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 14:03:46', '2015-07-30 14:03:46'),
(42, 'sdfsd', '', 'Bangalore, Karnataka, India', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 14:06:53', '2015-07-30 14:06:53'),
(45, 'vishnu correct!!!!', '', 'Bangalore, Karnataka, India', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '1:30am', '11:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 18:45:37', '2015-07-30 18:45:37'),
(46, 'vishnu finally!!!!', '', 'Bangalore, Karnataka, India', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-30 18:52:30', '2015-07-30 18:52:30'),
(47, 'tree bru', '', 'Bengaluru', '', 1, 1, 37, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-07-31', '2015-07-31', '12:00am', '11:00pm', 12.94, 77.56, 0.00, 0.00, 0.00, 0, '2015-07-30 18:56:56', '2015-07-30 18:56:56'),
(52, 'vishnu sachin', '', 'bangalore', '', 1, 1, 40, 'BDA Complex\r\n12th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-02', '2015-08-03', '12:00am', '9:30pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-07-31 12:11:59', '2015-07-31 12:11:59'),
(53, 'Event Hemanth', '', 'Bengaluru', '', 1, 1, 40, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-08-02', '2015-08-04', '12:00am', '4:00am', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-31 12:15:24', '2015-07-31 12:15:24'),
(54, 'rrrr', '', 'Bengaluru', '', 1, 1, 40, 'HSR Layout\r\n19th Main Rd\r\nHSR Layout\r\nBengaluru, Karnataka', '2015-08-03', '2015-08-18', '12:30am', '1:00am', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-07-31 14:12:28', '2015-07-31 14:12:28'),
(55, 'kjsdfjn', '', 'Bengaluru', 'test event VISHNU', 1, 1, 40, 'HSR BDA Complex Bus Stand\r\n14th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-01', '2015-08-01', '11:00am', '7:00pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-08-01 10:45:32', '2015-08-01 10:45:32'),
(56, 'gift event', '', 'Bengaluru', 'gift ticket', 1, 1, 40, 'HSR BDA Complex Bus Stand\r\n14th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-01', '2015-08-01', '1:14am', '11:30pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-08-01 05:25:55', '2015-08-01 05:25:55'),
(57, 'FIFA', 'rlzzgmtsttqlqzf6medical-logo-gold.png', 'Bengaluru', '', 1, 1, 40, 'HSR BDA Complex Bus Stand\r\n14th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-01', '2015-08-01', '1:56pm', '11:30pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-08-01 06:18:44', '2015-08-01 06:18:44'),
(58, 'FIFA Worldcup', '', 'Bengaluru', '', 1, 1, 40, 'HSR BDA Complex Bus Stand\r\n14th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-02', '2015-08-02', '12:00am', '11:00pm', 12.97, 77.59, 0.00, 0.00, 0.00, 0, '2015-08-01 09:02:26', '2015-08-01 09:02:26'),
(59, 'gggggggggg', '', 'Bengaluru', '', 1, 1, 40, 'HSR BDA Complex Bus Stand\r\n14th Main Rd\r\nSector 6, HSR Layout\r\nBengaluru, Karnataka 560102', '2015-08-05', '2015-08-12', '2:00am', '2:00am', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-08-04 02:55:30', '2015-08-04 02:55:30'),
(60, 'sdfgva', '', '', '', 1, 1, 40, 'dfg', '2015-08-02', '2015-08-02', '1:00am', '2:00pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-08-05 06:41:21', '2015-08-05 06:41:21'),
(61, 'asdjk', '', 'ldkj', '', 1, 1, 40, 'ldcfljk', '2015-08-05', '2015-08-05', '12:00am', '3:00pm', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-08-05 07:00:13', '2015-08-05 07:00:13');

-- --------------------------------------------------------

--
-- Table structure for table `event_categories`
--

CREATE TABLE IF NOT EXISTS `event_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `event_categories`
--

INSERT INTO `event_categories` (`id`, `name`, `image_url`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Medical', 'dfgf', 'Health Programme', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Business and Professionals', 'fggf', 'profit', '2015-06-25 23:30:00', '0000-00-00 00:00:00'),
(3, 'Travel', 'hgkg', 'Enjoyment', '2015-06-25 23:32:00', '0000-00-00 00:00:00'),
(4, 'Education', 'gggf', 'Education is very important', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Music', 'hgh', 'Music is beautifull', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Others', 'gsg', 'gfg', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `event_types`
--

CREATE TABLE IF NOT EXISTS `event_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `event_types`
--

INSERT INTO `event_types` (`id`, `name`, `image_url`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Medical camp', 'gfkg', 'Giving awarness to public', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Travel show,Customershow', 'dd', 'Profit', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Tour and Outdoor', 'fkgh', 'gfgfkjgfj', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Conference,Convetion', 'fg', 'fgsksgd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Competition', 'fg', 'ghfgh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'others', 'fgkg', 'gfsfyrgh', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_11_18_075356_create_users_table', 1),
('2014_11_21_130927_create_session_table', 1),
('2014_12_02_134337_create_events_table', 1),
('2014_12_02_134404_create_tickets_table', 1),
('2014_12_02_134426_create_transactions_table', 1),
('2014_12_02_134440_create_profiles_table', 1),
('2014_12_02_134458_create_event_types_table', 1),
('2014_12_02_134528_create_event_categories_table', 1),
('2014_12_02_134546_create_bookmark_events_table', 1),
('2014_12_02_134612_create_ticket_types_table', 1),
('2014_12_19_000314_create_settings_table', 1),
('2014_12_19_153457_create_payouts_table', 1),
('2014_12_19_234729_create_admins_table', 1),
('2015_07_29_152501_add_is_cancelled_to_transactions', 2);

-- --------------------------------------------------------

--
-- Table structure for table `payouts`
--

CREATE TABLE IF NOT EXISTS `payouts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `organiser_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `currency` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `facebook_link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `no` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` text COLLATE utf8_unicode_ci NOT NULL,
  `lat` float(8,2) NOT NULL,
  `lng` float(8,2) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `use_description` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `image_url`, `name`, `website`, `facebook_link`, `no`, `city`, `lat`, `lng`, `description`, `use_description`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '', 'Vishnu', '', '', '', '', 0.00, 0.00, '', 0, 40, '2015-08-01 06:48:47', '2015-08-03 03:57:28');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  UNIQUE KEY `sessions_id_unique` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=52 ;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`, `created_at`, `updated_at`) VALUES
(1, 'email_host', 'smtp.mailgun.org', '2015-07-30 07:58:30', '2015-07-30 07:58:30'),
(2, 'email_port', '587', '2015-07-30 07:58:30', '2015-07-30 07:58:30'),
(3, 'email_username', 'postmaster@sandboxad0ae2e211bd4152821b6a7f245cb045.mailgun.org', '2015-07-30 07:58:30', '2015-07-30 07:58:30'),
(4, 'email_password', 'Oct-1991', '2015-07-30 07:58:30', '2015-07-30 07:58:30'),
(5, 'email_encryption', 'tls', '2015-07-30 07:58:30', '2015-07-30 07:58:30'),
(6, 'from_email', 'mailgun@sandboxad0ae2e211bd4152821b6a7f245cb045.mailgun.org', '2015-07-30 07:58:31', '2015-07-30 07:58:31'),
(7, 'email_content_email_verification', 'Hello [username] , to verify your email address please click on the below link [verification_no] .\nTo visit our website pls click [site_link]\n', '2015-07-30 08:00:21', '2015-07-30 08:22:00'),
(8, 'email_subject_email_verification', 'Verify your Email address', '2015-07-30 08:00:21', '2015-07-30 08:00:21'),
(9, 'email_content_ticket_sold', 'tickets  sold', '2015-07-30 09:53:47', '2015-07-30 09:53:47'),
(10, 'email_subject_ticket_sold', 'tickets ', '2015-07-30 09:53:47', '2015-07-30 09:53:47'),
(11, 'email_content_buy_ticket', 'tikcet bought', '2015-07-30 09:59:58', '2015-07-30 09:59:58'),
(12, 'email_subject_buy_ticket', 'ticket buy', '2015-07-30 09:59:58', '2015-07-30 09:59:58'),
(13, 'email_content_disable_user', 'disable email', '2015-07-30 10:02:48', '2015-07-30 10:02:48'),
(14, 'email_subject_disable_user', 'disable email', '2015-07-30 10:02:48', '2015-07-30 10:02:48'),
(15, 'email_content_forgot_password', 'forgot password\r\n\r\nusername :  [username] \r\n\r\nsitelink:[site_link]\r\n\r\npasswordlink: [password_link]\r\n', '2015-07-30 10:03:15', '2015-07-30 10:05:35'),
(16, 'email_subject_forgot_password', 'forgot password', '2015-07-30 10:03:15', '2015-07-30 10:03:15'),
(17, 'email_content_enable_user', 'disable event', '2015-07-30 10:03:35', '2015-07-30 10:03:35'),
(18, 'email_subject_enable_user', 'enable event', '2015-07-30 10:03:36', '2015-07-30 10:03:36'),
(19, 'email_content_disable_event', 'disable event email', '2015-07-30 10:04:07', '2015-07-30 10:04:07'),
(20, 'email_subject_disable_event', 'disable event email', '2015-07-30 10:04:07', '2015-07-30 10:04:07'),
(21, 'email_content_enable_event', 'enable event email', '2015-07-30 10:04:30', '2015-07-30 10:04:30'),
(22, 'email_subject_enable_event', 'enable event email', '2015-07-30 10:04:30', '2015-07-30 10:04:30'),
(23, 'email_content_admin_payout', 'Admin Payout ', '2015-07-30 10:06:08', '2015-07-30 10:06:08'),
(24, 'email_subject_admin_payout', 'Admin Payout', '2015-07-30 10:06:08', '2015-07-30 10:06:08'),
(25, 'email_content_contact_organizer', 'username: [username] \nuser_email: [user_email] \norganizername: [user_email] \nmessage: [message]\nsite_link: [site_link] \n', '2015-07-30 10:07:59', '2015-07-30 10:07:59'),
(26, 'email_subject_contact_organizer', 'contact organizer', '2015-07-30 10:07:59', '2015-07-30 10:07:59'),
(27, 'cancelticketemailsubject', '', '2015-07-30 18:21:45', '2015-07-30 18:42:40'),
(28, 'cancelticketmail', 'Ticket Cancel', '2015-07-30 18:24:00', '2015-07-30 18:24:00'),
(29, 'cancelticketemail', 'username :[username]\nbookingid :[bookingid]\nrefundamount : [refundamount]\ntransactiontype: [transactiontype]', '2015-07-30 18:35:28', '2015-07-30 18:42:40'),
(30, 'canceleventemail', 'hello vishnu\n\nusername : [username]\neventname: [eventname]', '2015-07-30 18:41:38', '2015-07-30 18:41:38'),
(31, 'canceleventemailsubject', 'event cancel', '2015-07-30 18:41:38', '2015-07-30 18:41:38'),
(32, 'createeventemail', 'username :[username]\neventname:[eventname]\nstartdate: [startdate]\nstarttime: [starttime]\nenddate: [enddate]\nendtime: [endtime]', '2015-07-30 18:44:27', '2015-07-30 18:44:27'),
(33, 'createeventemailsubject', 'Create Event', '2015-07-30 18:44:27', '2015-07-30 18:44:27'),
(34, 'email_content_create_event', 'username :[username]\neventname:[eventname]\nstartdate: [startdate]\nstarttime: [starttime]\nenddate: [enddate]\nendtime: [endtime]', '2015-07-30 18:50:46', '2015-07-30 18:50:46'),
(35, 'email_subject_create_event', 'CreateEvent', '2015-07-30 18:50:46', '2015-07-30 18:50:46'),
(36, 'email_content_cancel_event', 'hello vishnu\r\n\r\nusername : [username]\r\neventname: [eventname]', '2015-07-30 18:51:11', '2015-07-30 18:51:11'),
(37, 'email_subject_cancel_eventt', 'Cancel Event', '2015-07-30 18:51:11', '2015-07-30 18:51:11'),
(38, 'email_content_cancel_ticket', 'username :[username]\r\nbookingid :[bookingid]\r\nrefundamount : [refundamount]\r\ntransactiontype: [transactiontype]', '2015-07-30 18:51:33', '2015-07-30 18:51:33'),
(39, 'email_subject_cancel_ticket', 'Ticket Cancel', '2015-07-30 18:51:33', '2015-07-30 18:51:33'),
(40, 'email_subject_cancel_event', 'event cancel', '2015-07-30 19:06:05', '2015-07-30 19:06:05'),
(41, 'form_first_name', 'Vishnu', '2015-07-31 10:52:23', '2015-07-31 14:09:45'),
(42, 'form_last_name', 'Surendran', '2015-07-31 10:52:23', '2015-07-31 10:52:23'),
(43, 'form_email', 'vishnu.ns@provenlogic.net', '2015-07-31 10:54:52', '2015-07-31 10:54:52'),
(44, 'form_address', '#32/1, Seshadri Road, Anandrao Circle Gandhi Nagar Bengaluru, Karnataka', '2015-07-31 10:54:52', '2015-08-01 05:31:12'),
(45, 'form_contact_no', '9876541324', '2015-07-31 10:54:52', '2015-08-01 09:02:55'),
(46, 'form_tickets', '77,1;78,2;79,3', '2015-07-31 10:54:52', '2015-08-01 09:02:55'),
(47, 'form_event_id', '58', '2015-07-31 10:56:56', '2015-08-01 09:02:55'),
(48, 'form_ticket_type', '0', '2015-07-31 13:07:16', '2015-07-31 13:11:46'),
(49, 'form_ticket_id', '65', '2015-07-31 13:41:28', '2015-07-31 13:41:28'),
(50, 'paypalusername', 'aravinth1991@gmail.com', '2015-08-01 01:20:26', '2015-08-01 10:25:02'),
(51, 'logo', 'jazhocynlogo-edited.png', '2015-08-03 03:43:05', '2015-08-03 03:43:05');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tickettype_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `seat_no` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=547 ;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `event_id`, `user_id`, `tickettype_id`, `transaction_id`, `seat_no`, `created_at`, `updated_at`) VALUES
(1, 3, 2, 5, 1, '', '2015-07-08 01:38:05', '2015-07-08 01:38:05'),
(2, 3, 2, 5, 1, '', '2015-07-08 01:38:05', '2015-07-08 01:38:05'),
(3, 3, 0, 5, 2, '', '2015-07-08 01:40:40', '2015-07-08 01:40:40'),
(4, 4, 0, 7, 3, '', '2015-07-14 05:22:48', '2015-07-14 05:22:48'),
(5, 4, 0, 7, 3, '', '2015-07-14 05:22:48', '2015-07-14 05:22:48'),
(6, 4, 0, 7, 4, '', '2015-07-14 05:22:50', '2015-07-14 05:22:50'),
(7, 4, 0, 7, 4, '', '2015-07-14 05:22:50', '2015-07-14 05:22:50'),
(8, 4, 0, 7, 5, '', '2015-07-14 05:22:50', '2015-07-14 05:22:50'),
(9, 4, 0, 7, 5, '', '2015-07-14 05:22:51', '2015-07-14 05:22:51'),
(12, 4, 0, 7, 7, '', '2015-07-14 05:22:51', '2015-07-14 05:22:51'),
(13, 4, 0, 7, 7, '', '2015-07-14 05:22:51', '2015-07-14 05:22:51'),
(14, 4, 0, 7, 8, '', '2015-07-14 05:22:51', '2015-07-14 05:22:51'),
(15, 4, 0, 7, 8, '', '2015-07-14 05:22:51', '2015-07-14 05:22:51'),
(75, 14, 7, 27, 52, '', '2015-07-29 13:46:08', '2015-07-29 13:46:08'),
(76, 14, 7, 27, 52, '', '2015-07-29 13:46:08', '2015-07-29 13:46:08'),
(77, 14, 7, 27, 52, '', '2015-07-29 13:46:08', '2015-07-29 13:46:08'),
(88, 14, 2, 27, 57, '', '2015-07-30 10:21:42', '2015-07-30 10:21:42'),
(89, 14, 2, 28, 58, '', '2015-07-30 10:58:32', '2015-07-30 10:58:32'),
(90, 14, 2, 28, 59, '', '2015-07-30 10:58:50', '2015-07-30 10:58:50'),
(91, 14, 2, 28, 60, '', '2015-07-30 11:09:46', '2015-07-30 11:09:46'),
(95, 14, 37, 27, 62, '', '2015-07-31 08:07:41', '2015-07-31 08:07:41'),
(96, 14, 37, 27, 63, '', '2015-07-31 08:07:45', '2015-07-31 08:07:45'),
(103, 14, 37, 27, 68, '', '2015-07-31 11:23:19', '2015-07-31 11:23:19'),
(104, 14, 37, 27, 69, '', '2015-07-31 11:23:22', '2015-07-31 11:23:22'),
(105, 14, 37, 27, 70, '', '2015-07-31 11:25:55', '2015-07-31 11:25:55'),
(143, 45, 37, 53, 81, '', '2015-07-31 11:47:56', '2015-07-31 11:47:56'),
(144, 45, 37, 53, 81, '', '2015-07-31 11:47:56', '2015-07-31 11:47:56'),
(145, 45, 37, 53, 82, '', '2015-07-31 11:47:59', '2015-07-31 11:47:59'),
(146, 45, 37, 53, 82, '', '2015-07-31 11:47:59', '2015-07-31 11:47:59'),
(147, 51, 39, 61, 83, '', '2015-07-31 11:59:32', '2015-07-31 11:59:32'),
(148, 51, 39, 61, 83, '', '2015-07-31 11:59:32', '2015-07-31 11:59:32'),
(149, 50, 39, 59, 84, '', '2015-07-31 12:02:03', '2015-07-31 12:02:03'),
(150, 50, 39, 59, 84, '', '2015-07-31 12:02:03', '2015-07-31 12:02:03'),
(151, 50, 39, 59, 84, '', '2015-07-31 12:02:03', '2015-07-31 12:02:03'),
(152, 50, 39, 59, 85, '', '2015-07-31 12:03:12', '2015-07-31 12:03:12'),
(153, 50, 39, 59, 85, '', '2015-07-31 12:03:12', '2015-07-31 12:03:12'),
(154, 50, 39, 59, 85, '', '2015-07-31 12:03:12', '2015-07-31 12:03:12'),
(325, 54, 40, 67, 101, '', '2015-07-31 14:21:59', '2015-07-31 14:21:59'),
(326, 54, 40, 67, 101, '', '2015-07-31 14:21:59', '2015-07-31 14:21:59'),
(327, 54, 40, 67, 101, '', '2015-07-31 14:21:59', '2015-07-31 14:21:59'),
(342, 54, 40, 68, 107, '', '2015-08-01 10:00:57', '2015-08-01 10:00:57'),
(343, 54, 40, 68, 107, '', '2015-08-01 10:00:58', '2015-08-01 10:00:58'),
(344, 54, 40, 68, 107, '', '2015-08-01 10:00:58', '2015-08-01 10:00:58'),
(345, 54, 40, 68, 108, '', '2015-08-01 10:02:22', '2015-08-01 10:02:22'),
(346, 54, 40, 68, 108, '', '2015-08-01 10:02:22', '2015-08-01 10:02:22'),
(347, 54, 40, 68, 108, '', '2015-08-01 10:02:22', '2015-08-01 10:02:22'),
(348, 54, 40, 68, 108, '', '2015-08-01 10:02:23', '2015-08-01 10:02:23'),
(349, 54, 40, 68, 108, '', '2015-08-01 10:02:23', '2015-08-01 10:02:23'),
(350, 54, 40, 68, 108, '', '2015-08-01 10:02:23', '2015-08-01 10:02:23'),
(351, 54, 40, 68, 109, '', '2015-08-01 10:26:07', '2015-08-01 10:26:07'),
(366, 56, 40, 73, 113, '', '2015-08-01 05:35:29', '2015-08-01 05:35:29'),
(367, 56, 40, 73, 113, '', '2015-08-01 05:35:29', '2015-08-01 05:35:29'),
(368, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(369, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(370, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(371, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(372, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(373, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(374, 56, 40, 73, 114, '', '2015-08-01 06:14:03', '2015-08-01 06:14:03'),
(375, 56, 40, 73, 115, '', '2015-08-01 06:15:32', '2015-08-01 06:15:32'),
(376, 57, 40, 74, 116, '', '2015-08-01 06:19:22', '2015-08-01 06:19:22'),
(377, 57, 40, 74, 116, '', '2015-08-01 06:19:22', '2015-08-01 06:19:22'),
(378, 57, 40, 74, 116, '', '2015-08-01 06:19:22', '2015-08-01 06:19:22'),
(379, 57, 40, 74, 116, '', '2015-08-01 06:19:22', '2015-08-01 06:19:22'),
(380, 57, 40, 74, 116, '', '2015-08-01 06:19:23', '2015-08-01 06:19:23'),
(381, 57, 40, 74, 116, '', '2015-08-01 06:19:23', '2015-08-01 06:19:23'),
(382, 57, 40, 74, 116, '', '2015-08-01 06:19:23', '2015-08-01 06:19:23'),
(383, 57, 40, 74, 116, '', '2015-08-01 06:19:23', '2015-08-01 06:19:23'),
(384, 57, 40, 74, 116, '', '2015-08-01 06:19:23', '2015-08-01 06:19:23'),
(385, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(386, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(387, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(388, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(389, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(390, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(391, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(392, 57, 40, 74, 117, '', '2015-08-01 06:19:26', '2015-08-01 06:19:26'),
(393, 57, 40, 74, 117, '', '2015-08-01 06:19:27', '2015-08-01 06:19:27'),
(535, 11, 40, 18, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(536, 11, 40, 18, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(537, 11, 40, 21, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(538, 11, 40, 21, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(539, 11, 40, 21, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(540, 11, 40, 21, 126, '', '2015-08-01 08:56:26', '2015-08-01 08:56:26'),
(541, 58, 40, 77, 127, '', '2015-08-01 09:03:22', '2015-08-01 09:03:22'),
(542, 58, 40, 78, 127, '', '2015-08-01 09:03:22', '2015-08-01 09:03:22'),
(543, 58, 40, 78, 127, '', '2015-08-01 09:03:22', '2015-08-01 09:03:22'),
(544, 58, 40, 79, 127, '', '2015-08-01 09:03:23', '2015-08-01 09:03:23'),
(545, 58, 40, 79, 127, '', '2015-08-01 09:03:23', '2015-08-01 09:03:23'),
(546, 58, 40, 79, 127, '', '2015-08-01 09:03:23', '2015-08-01 09:03:23');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_types`
--

CREATE TABLE IF NOT EXISTS `ticket_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `fees_show` float(8,2) NOT NULL,
  `fees_actual` float(8,2) NOT NULL,
  `booking_fees` float(8,2) NOT NULL,
  `payment_fees` float(8,2) NOT NULL,
  `fees_type` int(11) NOT NULL,
  `total_price` float(8,2) NOT NULL,
  `currency` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `noseats` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `endtime` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=80 ;

--
-- Dumping data for table `ticket_types`
--

INSERT INTO `ticket_types` (`id`, `event_id`, `type`, `price`, `fees_show`, `fees_actual`, `booking_fees`, `payment_fees`, `fees_type`, `total_price`, `currency`, `title`, `description`, `noseats`, `start_time`, `endtime`, `created_at`, `updated_at`) VALUES
(1, 9, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A/C', '', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-06 03:43:30', '2015-07-06 03:43:30'),
(5, 3, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-08 00:12:27', '2015-07-08 00:12:27'),
(6, 3, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'A+', '', 20, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-08 00:12:27', '2015-07-08 00:12:27'),
(7, 4, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A', '', 50, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 00:50:49', '2015-07-09 00:50:49'),
(8, 4, 1, 50, 0.00, 0.00, 0.00, 0.00, 0, 50.00, '', 'B', '', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 00:50:49', '2015-07-09 00:50:49'),
(9, 5, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A+', '', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 01:20:03', '2015-07-09 01:20:03'),
(10, 5, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'B+', '', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 01:20:03', '2015-07-09 01:20:03'),
(11, 6, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'paid', '', 30, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 04:16:09', '2015-07-09 04:16:09'),
(12, 6, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'Free', '', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-09 04:16:09', '2015-07-09 04:16:09'),
(18, 11, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'A+', '', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-14 03:25:44', '2015-07-14 03:25:44'),
(21, 11, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'B+', '', 48, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-14 05:17:46', '2015-07-17 02:15:53'),
(22, 12, 1, 400, 0.00, 0.00, 0.00, 0.00, 0, 400.00, '', 'gold', '', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 05:21:21', '2015-07-28 05:21:21'),
(23, 12, 1, 500, 0.00, 0.00, 0.00, 0.00, 0, 500.00, '', 'platinum', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 05:21:21', '2015-07-28 05:21:21'),
(24, 12, 1, 300, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 07:38:26', '2015-07-28 07:38:26'),
(25, 13, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free2', '', 20, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 08:18:45', '2015-07-28 08:18:45'),
(26, 13, 1, 500, 0.00, 0.00, 0.00, 0.00, 0, 500.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 08:18:45', '2015-07-28 08:18:45'),
(27, 14, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 08:28:12', '2015-07-30 10:21:42'),
(28, 14, 1, 500, 0.00, 0.00, 0.00, 0.00, 0, 500.00, '', 'gold', '', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-28 08:28:12', '2015-07-30 11:09:46'),
(29, 15, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-29 01:01:41', '2015-07-29 01:01:41'),
(30, 16, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-29 01:08:18', '2015-07-29 01:08:18'),
(31, 17, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'green', '', 16, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-29 01:11:34', '2015-07-29 01:11:34'),
(32, 18, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'tree', '', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-29 01:43:45', '2015-07-29 01:43:45'),
(33, 19, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'Green', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-29 05:24:20', '2015-07-29 05:24:20'),
(34, 20, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:12:58', '2015-07-30 09:12:58'),
(35, 20, 1, 500, 0.00, 0.00, 0.00, 0.00, 0, 500.00, '', 'gold', '', 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:12:58', '2015-07-30 09:12:58'),
(36, 22, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:35:50', '2015-07-30 09:35:50'),
(37, 23, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free0', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:43:29', '2015-07-30 09:43:29'),
(38, 24, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free0', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:43:49', '2015-07-30 09:43:49'),
(39, 25, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:46:06', '2015-07-30 09:46:06'),
(40, 26, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:46:18', '2015-07-30 09:46:18'),
(41, 27, 1, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 09:47:00', '2015-07-30 09:47:00'),
(42, 28, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 12:27:39', '2015-07-30 12:27:39'),
(43, 29, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 12:28:10', '2015-07-30 12:28:10'),
(44, 32, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 13:49:43', '2015-07-30 13:49:43'),
(45, 33, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 13:51:29', '2015-07-30 13:51:29'),
(46, 34, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 13:53:39', '2015-07-30 13:53:39'),
(47, 39, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 14:01:32', '2015-07-30 14:01:32'),
(48, 40, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 14:03:14', '2015-07-30 14:03:14'),
(49, 41, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 14:03:46', '2015-07-30 14:03:46'),
(50, 42, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 14:06:53', '2015-07-30 14:06:53'),
(51, 43, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 14:13:51', '2015-07-30 14:13:51'),
(52, 44, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 18:29:28', '2015-07-30 18:29:28'),
(53, 45, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 18:45:37', '2015-07-30 18:45:37'),
(54, 46, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'FREE', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 18:52:30', '2015-07-30 18:52:30'),
(55, 47, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 18:56:56', '2015-07-30 18:56:56'),
(56, 47, 1, 350, 0.00, 0.00, 0.00, 0.00, 0, 350.00, '', 'gold', '', 20, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-30 18:56:56', '2015-07-30 18:56:56'),
(57, 49, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:09', '2015-07-31 11:59:09'),
(58, 49, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'gold', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:09', '2015-07-31 11:59:09'),
(59, 50, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:12', '2015-07-31 11:59:12'),
(60, 50, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'gold', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:12', '2015-07-31 11:59:12'),
(61, 51, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:13', '2015-07-31 11:59:13'),
(62, 51, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'gold', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 11:59:13', '2015-07-31 11:59:13'),
(63, 52, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 12:11:59', '2015-07-31 12:11:59'),
(64, 52, 1, 300, 0.00, 0.00, 0.00, 0.00, 0, 300.00, '', 'gold', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 12:11:59', '2015-07-31 12:11:59'),
(65, 53, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 12:15:24', '2015-07-31 12:15:24'),
(66, 53, 1, 250, 0.00, 0.00, 0.00, 0.00, 0, 250.00, '', 'GOLD', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 12:15:24', '2015-07-31 12:15:24'),
(67, 54, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 14:12:28', '2015-07-31 14:12:28'),
(68, 54, 1, 350, 0.00, 0.00, 0.00, 0.00, 0, 350.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-31 14:12:28', '2015-07-31 14:12:28'),
(69, 55, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'FREE', '', 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 10:45:33', '2015-08-01 10:45:33'),
(70, 55, 1, 500, 0.00, 0.00, 0.00, 0.00, 0, 500.00, '', 'platinum', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 10:45:33', '2015-08-01 10:45:33'),
(71, 55, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 10:45:33', '2015-08-01 10:45:33'),
(72, 56, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'platinum', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 05:25:55', '2015-08-01 05:25:55'),
(73, 56, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 05:25:56', '2015-08-01 05:25:56'),
(74, 57, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 06:18:44', '2015-08-01 06:18:44'),
(75, 57, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'platinum', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 06:18:44', '2015-08-01 06:18:44'),
(76, 57, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 06:18:45', '2015-08-01 06:18:45'),
(77, 58, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'free', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 09:02:26', '2015-08-01 09:02:26'),
(78, 58, 1, 200, 0.00, 0.00, 0.00, 0.00, 0, 200.00, '', 'platinum', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 09:02:26', '2015-08-01 09:02:26'),
(79, 58, 1, 100, 0.00, 0.00, 0.00, 0.00, 0, 100.00, '', 'gold', '', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-08-01 09:02:26', '2015-08-01 09:02:26');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `transaction_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `booking_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_no` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `currency` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_cancelled` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=128 ;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transaction_id`, `booking_id`, `address`, `first_name`, `last_name`, `email`, `contact_no`, `user_id`, `amount`, `type`, `currency`, `status`, `created_at`, `updated_at`, `is_cancelled`) VALUES
(1, '', 'SceFvV7YwY', '', 'pandiyaraja', 'A', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-08 01:38:05', '2015-07-08 01:38:05', 0),
(2, '', 'JGPMSen8ed', '', 'pandiyaraja', 'A', 'pandiyaraja@provenlogic.net', '9632592212', 0, 0, 'Free', 'USD', 1, '2015-07-08 01:40:40', '2015-07-08 01:40:40', 0),
(3, '', 'vKPyWhPckJ', '', 'pandiya', 'raja', 'pandiyraja@provenlogic.net', '9789457012', 0, 0, 'Free', 'USD', 1, '2015-07-14 05:22:48', '2015-07-14 05:22:48', 0),
(4, '', '2K64N3SkZs', '', 'pandiya', 'raja', 'pandiyraja@provenlogic.net', '9789457012', 0, 0, 'Free', 'USD', 1, '2015-07-14 05:22:50', '2015-07-14 05:22:50', 0),
(5, '', '2quCIe7bGU', '', 'pandiya', 'raja', 'pandiyraja@provenlogic.net', '9789457012', 0, 0, 'Free', 'USD', 1, '2015-07-14 05:22:50', '2015-07-14 05:22:50', 0),
(7, '', 'OEdYkKWFLi', '', 'pandiya', 'raja', 'pandiyraja@provenlogic.net', '9789457012', 0, 0, 'Free', 'USD', 1, '2015-07-14 05:22:51', '2015-07-14 05:22:51', 0),
(8, '', 'zz84GRz9mB', '', 'pandiya', 'raja', 'pandiyraja@provenlogic.net', '9789457012', 0, 0, 'Free', 'USD', 1, '2015-07-14 05:22:51', '2015-07-14 05:22:51', 0),
(9, '', '59ngIgI8Op', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:25', '2015-07-14 09:01:25', 0),
(10, '', 'UEQe4LudLy', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:26', '2015-07-14 09:01:26', 0),
(11, '', 'EfDCSd8J1i', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:26', '2015-07-14 09:01:26', 0),
(12, '', 'iSfGoRjmQz', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:26', '2015-07-14 09:01:26', 0),
(13, '', 'QzaTjFJ3ug', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:26', '2015-07-14 09:01:26', 0),
(14, '', 'lq18AGLv7v', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:01:26', '2015-07-14 09:01:26', 0),
(15, '', 'O3TbUADzhQ', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:08', '2015-07-14 09:02:08', 0),
(16, '', '8EqAjyW7Hp', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:09', '2015-07-14 09:02:09', 0),
(17, '', '8IOwRA8N7Q', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:09', '2015-07-14 09:02:09', 0),
(18, '', 'qC30KccTYn', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:09', '2015-07-14 09:02:09', 0),
(19, '', 'Nz5HaCptuX', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:09', '2015-07-14 09:02:09', 0),
(20, '', 'Bvpc0j9f5Z', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-14 09:02:10', '2015-07-14 09:02:10', 0),
(39, '', 'Mumo1208kF', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-17 02:07:51', '2015-07-17 02:07:51', 0),
(40, 'b3m4j4ndj5emekje', 'du0Nm1KxXQ', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 200, 'Paid', 'USD', 1, '2015-07-17 02:15:53', '2015-07-17 02:15:53', 0),
(43, '', 'V15nYYFIwe', '', 'Vishnusecond', 'Surendran', 'vishnu.ns195@gmail.com', '9873730282', 29, 0, 'Free', 'USD', 1, '2015-07-28 08:32:39', '2015-07-30 07:13:46', 1),
(44, '', '0JtF2xVupf', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9734444444', 29, 0, 'Free', 'USD', 1, '2015-07-29 10:08:08', '2015-07-30 07:13:47', 1),
(45, '', 'K8y4hh8dXu', '', 'vihnu', 'fsdasdfasdfas', 'vishnu.ns195@gmail.com', '8987897890', 29, 0, 'Free', 'USD', 1, '2015-07-29 10:37:26', '2015-07-30 07:13:47', 1),
(46, '', 'fvqdRvlIS6', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9878989089', 29, 0, 'Free', 'USD', 1, '2015-07-29 11:01:41', '2015-07-30 07:13:47', 1),
(47, '', '0D672UXnAA', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9870987090', 29, 0, 'Free', 'USD', 1, '2015-07-29 11:44:52', '2015-07-30 07:13:47', 1),
(48, '', 'xuvPandhVw', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9878987890', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:37:09', '2015-07-30 07:13:47', 1),
(49, '', 'NeQ166tOzt', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9730740929', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:40:12', '2015-07-30 07:13:47', 1),
(50, '', 'A5tVNtsYGX', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '8987897890', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:42:32', '2015-07-30 07:13:47', 1),
(51, '', 'KGYm5QuMkj', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9898897898', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:45:17', '2015-07-30 07:13:47', 1),
(52, '', 'ayyhARJxF9', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9730789878', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:46:08', '2015-07-30 07:13:47', 0),
(53, '', 'ckGmJY1ZXh', '', 'Vishnu', 'Surendran', 'vishnu.ns195@gmail.com', '9730989890', 29, 0, 'Free', 'USD', 1, '2015-07-29 13:47:06', '2015-07-30 07:13:47', 1),
(57, '', 'sOuRGzuzrC', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 0, 'Free', 'USD', 1, '2015-07-30 10:21:42', '2015-07-30 10:21:42', 0),
(58, '', 'btjTGunTvL', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 500, 'Paid', 'USD', 1, '2015-07-30 10:58:32', '2015-07-30 10:58:32', 0),
(59, '', 'RORYnd4Xkv', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 500, 'Paid', 'USD', 1, '2015-07-30 10:58:50', '2015-07-30 10:58:50', 0),
(60, '', 'DUMqPI1eCE', '', 'pandiya', 'raja', 'pandiyaraja@provenlogic.net', '9632592212', 2, 500, 'Paid', 'USD', 1, '2015-07-30 11:09:46', '2015-07-30 11:09:46', 0),
(86, '', 'DBxs3K5nwv', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877899870', 57, 0, 'Free', 'USD', 1, '2015-07-31 12:12:22', '2015-08-05 08:20:54', 1),
(87, '', 'mxxUQneCce', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877899870', 57, 0, 'Free', 'USD', 1, '2015-07-31 12:15:43', '2015-08-05 08:20:54', 0),
(88, '3T666838YW247742P', 'Bap0zjq3Wp', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898790', 57, 750, 'Paid', 'USD', 1, '2015-07-31 12:17:13', '2015-08-05 08:20:54', 0),
(89, '5V627714TK7889636', 'uKiqfPgXPQ', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9898767890', 57, 1000, 'Paid', 'USD', 1, '2015-07-31 12:47:16', '2015-08-05 08:20:54', 0),
(90, '', 'PKFIVbZEHd', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9988898980', 57, 0, 'Free', 'USD', 1, '2015-07-31 13:07:16', '2015-08-05 08:20:54', 0),
(91, '', 'nhosZUsjx5', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877809890', 57, 0, 'Free', 'USD', 1, '2015-07-31 13:11:46', '2015-08-05 08:20:54', 0),
(92, '4S659769EE3665946', 'TdaJysYNVd', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '8987787800', 57, 750, 'Paid', 'USD', 1, '2015-07-31 13:33:19', '2015-08-05 08:20:54', 0),
(93, '0P317549V4398464L', '66sXpHZqSY', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877899870', 57, 500, 'Paid', 'USD', 1, '2015-07-31 13:38:55', '2015-08-05 08:20:54', 0),
(94, '5YD71382DX8202037', 'k3BDzjGGLH', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9987789890', 57, 500, 'Paid', 'USD', 1, '2015-07-31 13:42:04', '2015-08-05 08:20:54', 1),
(95, '', 'vuocTZhCJ7', '', 'vihnu', 'Surendran', 'vishnu.ns@provenlogic.net', '1234567890', 57, 0, 'Free', 'USD', 1, '2015-07-31 13:55:25', '2015-08-05 08:20:54', 1),
(96, '10X232862U216420H', 'iyJLXw1C7R', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898709', 57, 750, 'Paid', 'USD', 1, '2015-07-31 13:57:34', '2015-08-05 08:20:54', 0),
(97, '62470608VD117461K', 'dTDoOhn4BF', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '6567898780', 57, 700, 'Paid', 'USD', 1, '2015-07-31 14:13:52', '2015-08-05 08:20:54', 1),
(98, '29978036A44028925', 'OZXcIS0rfP', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '7898798790', 57, 700, 'Paid', 'USD', 1, '2015-07-31 14:16:59', '2015-08-05 08:20:55', 1),
(99, '29978036A44028925', 'E3QXSc56K1', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '7898798790', 57, 700, 'Paid', 'USD', 1, '2015-07-31 14:19:04', '2015-08-05 08:20:55', 1),
(100, '42H9970263491592B', '8616OAEtTI', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898702', 57, 700, 'Paid', 'USD', 1, '2015-07-31 14:21:16', '2015-08-05 08:20:55', 1),
(101, '', 'FryySH4FlX', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9783765346', 57, 0, 'Free', 'USD', 1, '2015-07-31 14:21:59', '2015-08-05 08:20:55', 0),
(102, '5WE24625V06041720', '3ZrdTjOwOg', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9767678678', 57, 300, 'Paid', 'USD', 1, '2015-07-31 14:58:02', '2015-08-05 08:20:55', 1),
(103, '63W03295RS9387602', '8FqQsmmOXr', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877897890', 57, 500, 'Paid', 'USD', 1, '2015-07-31 15:01:24', '2015-08-05 08:20:55', 1),
(104, '9ES17557WC8169729', '5yzI5Sf1Fa', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9876787680', 57, 700, 'Paid', 'USD', 1, '2015-07-31 15:17:31', '2015-08-05 08:20:55', 1),
(105, '0RN11691G27530306', 'fiGb1RCpF6', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '8883893920', 57, 1050, 'Paid', 'USD', 1, '2015-07-31 15:20:50', '2015-08-05 08:20:55', 1),
(106, '9M0298040B839045X', 'mjvnLsjrv1', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898980', 57, 350, 'Paid', 'USD', 1, '2015-08-01 01:00:47', '2015-08-05 08:20:55', 1),
(107, '6XE08406WV7201636', 'BHQQJ4fWjI', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '8977898790', 57, 1050, 'Paid', 'USD', 1, '2015-08-01 10:00:57', '2015-08-05 08:20:55', 0),
(108, '5J524608PF797605V', 'PccVySDw85', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9876785780', 57, 2100, 'Paid', 'USD', 1, '2015-08-01 10:02:22', '2015-08-05 08:20:55', 0),
(109, '16854225BR853171X', 'LyOUkB5TGP', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898970', 57, 350, 'Paid', 'USD', 1, '2015-08-01 10:26:07', '2015-08-05 08:20:55', 0),
(110, '', 'RLstvmVAfa', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877897890', 57, 0, 'Free', 'USD', 1, '2015-08-01 05:27:02', '2015-08-05 08:20:55', 0),
(111, '', 'ZWKsgshcoI', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '0000000000', 57, 0, 'Free', 'USD', 1, '2015-08-01 05:31:12', '2015-08-05 08:20:55', 0),
(112, '', 'x9oT7FNXSm', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '0000000000', 57, 0, 'Free', 'USD', 1, '2015-08-01 05:31:15', '2015-08-05 08:20:55', 0),
(113, '1YX0711736543082X', 'X8dWflc2cG', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '0000000000', 57, 200, 'Paid', 'USD', 1, '2015-08-01 05:35:29', '2015-08-05 08:20:55', 0),
(114, '9P3008151X344530C', 'En0TmMUp50', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9878799080', 57, 700, 'Paid', 'USD', 1, '2015-08-01 06:14:03', '2015-08-05 08:20:55', 0),
(115, '3V855512PU1503407', 'OnRpXVv3Qw', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9770987897', 57, 100, 'Paid', 'USD', 1, '2015-08-01 06:15:31', '2015-08-05 08:20:55', 0),
(116, '', 'm8lcwCY5Ld', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '0000000000', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:19:22', '2015-08-05 08:20:55', 0),
(117, '', 'ALNA9N7ujJ', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '0000000000', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:19:26', '2015-08-05 08:20:56', 0),
(118, '', 'Syc57aG4pT', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9730728109', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:28:45', '2015-08-05 08:20:56', 0),
(119, '', 'DsCwnbjQlA', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9730728109', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:28:49', '2015-08-05 08:20:56', 0),
(120, '', 'NLjro6Y9p1', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898790', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:33:33', '2015-08-05 08:20:56', 0),
(121, '', 'hs2kjhJT5F', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898790', 57, 0, 'Free', 'USD', 1, '2015-08-01 06:33:37', '2015-08-05 08:20:56', 0),
(122, '1JE228325M971022L', 'SAl8bEDTYc', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9897898780', 57, 500, 'Paid', 'USD', 1, '2015-08-01 06:55:10', '2015-08-05 08:20:56', 1),
(124, '85B596409D043705A', 'Jq6a7THDqP', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898790', 57, 500, 'Paid', 'USD', 1, '2015-08-01 08:42:01', '2015-08-05 08:20:56', 0),
(125, '85B596409D043705A', '6bIlHBx4R0', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9877898790', 57, 500, 'Paid', 'USD', 1, '2015-08-01 08:48:51', '2015-08-05 08:20:56', 1),
(126, '5SF65077G0452320S', 'uYRBlGqbRz', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9730740827', 57, 600, 'Paid', 'USD', 1, '2015-08-01 08:56:26', '2015-08-05 08:20:56', 0),
(127, '4KP76185N5513215D', 'jKwXJLR3bq', '', 'Vishnu', 'Surendran', 'vishnu.ns@provenlogic.net', '9876541324', 57, 700, 'Paid', 'USD', 1, '2015-08-01 09:03:22', '2015-08-05 08:20:56', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` enum('male','female') COLLATE utf8_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `role` int(11) NOT NULL,
  `verified` int(11) NOT NULL,
  `verification_no` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `facebook_id` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=58 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `gender`, `dob`, `password`, `first_name`, `last_name`, `city`, `address`, `phone`, `role`, `verified`, `verification_no`, `facebook_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'preethi@provenlogic.net', 'female', '0000-00-00', '$2y$10$iMFybcF0jqmp1ujwiH.gJ.44yXgmsbUi.kgzNSOHBGiINp5UgCE8m', '', '', '', '', '', 0, 1, '', 0, 'w4jAofiRKB6IrS0bwTPUeIlEePPuLhuKV0D29r882DobzZGRoMOgvpBoe1nc', '2015-06-26 04:26:48', '2015-07-06 02:39:16'),
(2, 'pandiyaraja@provenlogic.net', 'male', '1988-10-14', '$2y$10$JQdni09ppQg26oU3RH/mYORDc1t3yZWHU.vaZPZiYfl8QIptdJnqS', 'pandiyaraja', 'A', 'Bangalore, Karnataka, India', 'HSR layout', '9632592212', 0, 1, '', 0, '1OM41F4NbguUYZYZUULitaC18OKPdiqscMz0EpDXVDJ5369Oime4P66OO6mb', '2015-07-08 00:02:56', '2015-07-14 09:02:14'),
(4, 'raja@p.com', 'male', '0000-00-00', '$2y$10$d/ZxdEQkTO/SwQPG4bx5EezHqrJVf3HbUzYODQIBclVZsfpVkJUcK', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-10 09:31:44', '2015-07-10 09:31:44'),
(5, 'z2@p.com', 'male', '0000-00-00', '$2y$10$5GUaAxoNPlyWDjfMbQEeV.VGPurVc07mqYL2jGHNJIK9eLmcGEqDG', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-13 00:19:57', '2015-07-13 00:19:57'),
(6, 'vishnu.ns1@provenlogic.net', 'male', '0000-00-00', '$2y$10$sCQQyPpku0Spc1nVC86xAu2uK6hVzD3xdObgjXmgSOIeb/m3C0K/G', '', '', '', '', '', 0, 1, '', 0, 'EQ52sFdHs2NU6Fc5uNbY5abpoyAOFZ6Zh0zWOpfNpiz7uSyLkTzX8Vt5uLx1', '2015-07-28 05:18:53', '2015-07-29 17:03:37'),
(7, 'vishnu.ns1951@gmail.com', 'male', '0000-00-00', '$2y$10$f.mNpVxqKya8nYqc2nbl4ek2Xt1J5r6L7JsTSmg8eh2mOx06i9/ii', '', '', '', '', '', 0, 1, '', 0, 'Nz2LaYbYwgeO9ZbGIw5pxKXd1KlFhmHTPTnqCrmbvS9LGQSrDjaSOmof7eDM', '2015-07-28 05:21:45', '2015-07-30 07:07:10'),
(11, 'kailash123@provenlogic.net', 'male', '0000-00-00', '$2y$10$Xvv4UllMaKSXYs/0.4EdOu/wU7wXhoRXoTMSZhyx846/.t27yRlX6', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-29 15:07:14', '2015-07-29 15:07:14'),
(12, 'kailash@proven.net', 'male', '0000-00-00', '$2y$10$3DIU.3USp4p8oQ1MkCrPNezoq.j8Ju6cXw8G1Fjb9fkyjikoC1G1O', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-29 15:08:01', '2015-07-29 15:08:01'),
(15, 'testpaypal34@gmail.com', 'male', '0000-00-00', '$2y$10$/ViOj0tJdcN8Xys51nEUBuuweJPmdwOGWdOE2IscLzgUGlnblbkY.', '', '', '', '', '', 0, 1, '', 0, 'tp0wIvWRzfP1V9QDYRJOvgAnfMBdYOjMNwLYFyz9I2xXXAylpVxxWc8TSH9H', '2015-07-29 17:07:29', '2015-07-30 02:38:36'),
(16, 'kk@gmail.com', 'male', '0000-00-00', '$2y$10$jF.qXqDM/Voaj1.KnKYccO8SfseilOfL3VR93z152vJkdsEOuYB66', '', '', '', '', '', 0, 1, '', 0, 'vnlGNgp7qPFJaup5AvvHePvgqz8Ca5NXXXFMEeJH9260RmcBl5LfJbRkWrwf', '2015-07-30 02:46:32', '2015-07-30 03:05:43'),
(17, 'ss@gmail.com', 'male', '0000-00-00', '$2y$10$fRk5POjUwo850gkLui1ApuTtGnXpfidpO1P/ZHAp350KH6NXwnsQG', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-30 03:06:00', '2015-07-30 03:06:00'),
(19, 'hh@gmail.com', 'male', '0000-00-00', '$2y$10$jhEZzc3tZClkUJla2ppCg.h0dq7NQMWuw.r7yvTUN8v7NnHCaRxE6', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-30 06:25:40', '2015-07-30 06:25:40'),
(20, 'jjk@gmail.com', 'male', '0000-00-00', '$2y$10$9CYYDeQJk.uMftEN42M.feJ351X052dLh6J37dTujWO./J1ObEHAi', '', '', '', '', '', 0, 1, '', 0, NULL, '2015-07-30 06:38:17', '2015-07-30 06:38:17'),
(22, 'ddff@gmail.com', 'male', '0000-00-00', '$2y$10$ILIJClYudvLbtN0OAKIsjOm1CuEIRZnxM45J.H2VUXRXRTEY57f6G', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-30 06:41:53', '2015-07-30 06:41:53'),
(23, 'ffggth@gmail.com', 'male', '0000-00-00', '$2y$10$FonZD47s0bAObMuJCff0DedosF0/fLN5otxRFU7OZ0WZDIzHQspyC', '', '', '', '', '', 0, 0, '', 0, NULL, '2015-07-30 06:42:27', '2015-07-30 06:42:27'),
(24, 'qwe@gmail.com', 'male', '0000-00-00', '$2y$10$FS1PF9uepQpf2DuALBpDZe1ohflPWoNGjD/ljtS246y.iiqOkez92', '', '', '', '', '', 0, 1, '', 0, 'MvhCxysIbXQ5wPj1WaHALHIDMWz2kzcVF5B85nFRx4AEeA9b9elaPfqqKX7i', '2015-07-30 06:43:03', '2015-07-30 06:47:07'),
(25, 'hello@gmail.com', 'male', '0000-00-00', '$2y$10$9h2eFLSvPfFpxFBtwhmyN.1qBoBVBwlJBiiqEyC5CMqsD.vcwn5Ti', '', '', '', '', '', 0, 1, '', 0, 'h1n9P69ifxan1QXN1GQ4U39G6UVqqIAMAE2kJ3pBClyTO5OgmD80DAnJZsU9', '2015-07-30 06:47:19', '2015-07-30 06:52:06'),
(26, 'jasd@gmail.com', 'male', '0000-00-00', '$2y$10$Ed9wVuoLkpOZwp/k20h88Os6JcN3lxrQxH/DVkbA96O4V0MfxCoEK', '', '', '', '', '', 0, 1, '', 0, 'DgLZvhMGG10QYphXvVMjTjR9JQhbOQ9RtvENR7AvRlat2QPBboNt6C29r6Zu', '2015-07-30 07:07:27', '2015-07-30 07:07:49'),
(37, 'vishnu.ns111@provenlogic.net', 'male', '0000-00-00', '$2y$10$7/876xsvGkd.jYzV8ztC9OL3IpngtoBKvM1s4b5XqJxopBd.wGZNu', '', '', '', '', '', 0, 1, '', 0, 'mLhOj0n3OQf9sSUuUhimjvQzMysj0dpotUCD5Ik1s0ZujF6YNgPo32JJ80jf', '2015-07-30 08:26:22', '2015-07-31 11:55:31'),
(40, 'vishnu.ns12312@provenlogic.net', 'male', '0000-00-00', '$2y$10$exPulnYIJxdxG0LHfzRKI.9ZYnM/W8PTZ5E/AiThJW/BehYo7FqNG', '', '', '', '', '', 0, 1, '', 0, 'ZT3XIAgi723yBv1hO0gNbpLaEyvKSaUXy5mAbjLrFopwrVCnuZGT2RtxIOGS', '2015-07-31 12:09:58', '2015-08-03 05:01:34'),
(41, '949879691735560', 'male', '0000-00-00', '$2y$10$4eNsFn9IFnmDrKwUH8HhQO.XUb9UEOLJ2ByT5xprfnVE2vpyp1QEW', '', '', '', '', '', 0, 0, '', 2147483647, 'OJgGlFbsqVjDtOTbX7tiQxy3qgJG8OGfAfzvvXYzSCa8m2ThxXZYSc8aSt1o', '2015-08-01 07:14:56', '2015-08-01 07:48:49'),
(46, 'trivikram@provenlogic.net', 'male', '0000-00-00', '$2y$10$k8zX6MVvpq.yI9bQOvwfIuNNd.qqAf57W8BmLVMSYqohY2jU3DFGO', '', '', '', '', '', 0, 1, '55bc84d92401b', 2147483647, 'XrEIiQj1YEzW8dVGxS0d3JRKJbivZrDXFdtdEXCTzN48M8j24gnC545cxOzj', '2015-08-01 08:35:37', '2015-08-01 09:43:38'),
(57, 'vishnu.ns@provenlogic.net', 'male', '0000-00-00', '$2y$10$P1lOhqBwl0DR2eAoq9JQge2SU5kAmXZQ7eBAt6tVRoVNFBDJzUGOy', '', '', '', '', '', 0, 1, '55c214c087c41', 0, 'GaCS6LaM0HfZMteeNnVZz0TXiCKgTH3Iqvfn25QZwDzficHbICT3PRZwdAcD', '2015-08-05 08:20:54', '2015-08-05 08:23:08');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
