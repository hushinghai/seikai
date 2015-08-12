-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 12, 2015 at 08:46 PM
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
(1, 'pandiyaraja', '$2a$10$iXBKnkWesIvKfHMzV4T2IugzThU8SG7FjgF3JEgI0yO0zAGOi01kO', '127.0.0.1', '2015-08-12 15:10:21', '0000-00-00 00:00:00', '2015-08-12 09:40:21');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
(45, 'form_contact_no', '9877877890', '2015-07-31 10:54:52', '2015-08-06 03:51:11'),
(46, 'form_tickets', '18,3;21,5', '2015-07-31 10:54:52', '2015-08-06 03:51:11'),
(47, 'form_event_id', '11', '2015-07-31 10:56:56', '2015-08-06 02:10:46'),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
