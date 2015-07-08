-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 07, 2015 at 07:40 PM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `EventBolt`
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
(1, 'preethi', 'preethi', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `image_url`, `city`, `description`, `category`, `event_type`, `user_created`, `venue`, `start_date`, `end_date`, `start_time`, `end_time`, `lat`, `lng`, `payment_fees`, `booking_fees_base`, `booking_fees`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Medical Camp', '', 'Chennai, Tamil Nadu, India', '', 1, 1, 1, 'Chromepet', '2015-06-27', '2015-06-27', '10:00pm', '2:00pm', 13.08, 80.27, 0.00, 0.00, 0.00, 0, '2015-06-26 07:06:28', '2015-06-26 07:06:28'),
(2, 'Medical Camp', 'nzlnnuszscatting.jpg', 'chennai', 'Medical Camp', 1, 1, 1, 'chrompet', '2015-06-27', '2015-06-27', '12:30am', '2:30am', 0.00, 0.00, 0.00, 0.00, 0.00, 0, '2015-06-26 07:25:45', '2015-06-26 07:25:45');

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
('2014_12_19_234729_create_admins_table', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `ticket_types`
--

INSERT INTO `ticket_types` (`id`, `event_id`, `type`, `price`, `fees_show`, `fees_actual`, `booking_fees`, `payment_fees`, `fees_type`, `total_price`, `currency`, `title`, `description`, `noseats`, `start_time`, `endtime`, `created_at`, `updated_at`) VALUES
(1, 9, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A/C', '', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-06 03:43:30', '2015-07-06 03:43:30'),
(2, 12, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A/C', '', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-06 03:50:20', '2015-07-06 03:50:20'),
(3, 13, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'A/C', '', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-06 03:58:55', '2015-07-06 03:58:55'),
(4, 14, 0, 0, 0.00, 0.00, 0.00, 0.00, 0, 0.00, '', 'General', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2015-07-06 05:24:55', '2015-07-06 05:24:55');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `gender`, `dob`, `password`, `first_name`, `last_name`, `city`, `address`, `phone`, `role`, `verified`, `verification_no`, `facebook_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'preethi@provenlogic.net', 'female', '0000-00-00', '$2y$10$iMFybcF0jqmp1ujwiH.gJ.44yXgmsbUi.kgzNSOHBGiINp5UgCE8m', '', '', '', '', '', 0, 1, '', 0, 'w4jAofiRKB6IrS0bwTPUeIlEePPuLhuKV0D29r882DobzZGRoMOgvpBoe1nc', '2015-06-26 04:26:48', '2015-07-06 02:39:16');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
