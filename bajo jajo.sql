-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Cze 2024, 17:31
-- Wersja serwera: 10.4.18-MariaDB
-- Wersja PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ekwipunek`
--

CREATE TABLE `ekwipunek` (
  `id_usera` int(11) NOT NULL,
  `id_broni` int(11) NOT NULL,
  `id_operacji` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `ekwipunek`
--

INSERT INTO `ekwipunek` (`id_usera`, `id_broni`, `id_operacji`) VALUES
(4, 29, 1),
(4, 33, 2),
(4, 35, 3),
(4, 40, 4),
(4, 58, 5),
(4, 61, 6),
(4, 62, 7),
(4, 63, 8),
(4, 67, 9),
(4, 79, 10),
(4, 50, 11),
(4, 32, 12),
(4, 9, 13),
(4, 40, 14),
(4, 40, 15),
(4, 48, 16),
(4, 12, 17),
(4, 51, 18),
(4, 22, 19),
(4, 80, 20),
(4, 54, 21),
(4, 79, 22),
(4, 43, 23),
(4, 3, 24),
(4, 83, 25),
(4, 60, 26),
(4, 70, 27),
(4, 83, 28),
(4, 12, 29),
(4, 17, 30),
(4, 33, 31),
(4, 48, 32),
(4, 25, 33),
(4, 67, 34),
(4, 51, 35);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `cena` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `images`
--

INSERT INTO `images` (`id`, `name`, `img`, `cena`) VALUES
(1, 'Desert Eagle | Urban DDPAT', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png', 60),
(2, 'Desert Eagle | Golden Koi', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_am_scales_bravo_light_png.png', 498),
(3, 'Desert Eagle | Cobalt Disruption', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_am_ddpatdense_peacock_light_png.png', 317),
(4, 'Desert Eagle | Hypnotic', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_aa_vertigo_light_png.png', 80),
(5, 'Desert Eagle | Blaze', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_aa_flames_light_png.png', 432),
(6, 'AK-47 | Redline', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_pinstripe_ak47_light_png.png', 917),
(7, 'AK-47 | Vulcan', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_png.png', 310),
(8, 'AK-47 | Jaguar', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_panther_ak47_light_png.png', 770),
(9, 'AK-47 | Fire Serpent', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_fireserpent_ak47_bravo_light_png.png', 928),
(10, 'AK-47 | Neon Revolution', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_anarchy_light_png.png', 338),
(11, 'M4A1-S | Blood Tiger', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_hy_redtiger_light_png.png', 877),
(12, 'M4A1-S | VariCamo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_hy_varicamo_light_png.png', 390),
(13, 'M4A1-S | Guardian', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_cu_m4a1-s_elegant_light_png.png', 302),
(14, 'M4A1-S | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_png.png', 330),
(15, 'M4A1-S | Chantico\'s Fire', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_mecha_industries_light_png.png', 733),
(16, 'AWP | Dragon Lore', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_png.png', 684),
(17, 'AWP | Gungnir', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_gs_awp_gungnir_light_png.png', 222),
(18, 'AWP | Acheron', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_hy_nuclear_skulls_redblue_light_png.png', 36),
(19, 'AWP | Medusa', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_hy_zodiac2_light_png.png', 499),
(20, 'AWP | Man-o\'-war', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_am_awp_glory_light_png.png', 396),
(21, 'Glock-18 | Fade', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_aa_fade_light_png.png', 471),
(22, 'Glock-18 | Night', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_so_night_light_png.png', 167),
(23, 'Glock-18 | Dragon Tattoo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_am_dragon_glock_light_png.png', 404),
(24, 'Glock-18 | Water Elemental', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_cu_glock-liquescent_light_png.png', 520),
(25, 'Glock-18 | Weasel', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_cu_glock18_weasel_light_png.png', 385),
(26, 'USP-S | Kill Confirmed', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_png.png', 357),
(27, 'USP-S | Neo-Noir', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usps_noir_light_png.png', 621),
(28, 'USP-S | Cortex', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_cut_light_png.png', 44),
(29, 'USP-S | Orion', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_spitfire_light_png.png', 326),
(30, 'USP-S | Stainless', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_silencer_aq_usp_stainless_light_png.png', 500),
(31, 'Five-SeveN | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_cu_fiveseven_hyperbeast_light_png.png', 522),
(32, 'Five-SeveN | Monkey Business', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_cu_fiveseven_banana_light_png.png', 110),
(33, 'Five-SeveN | Neon Kimono', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_hy_kimono_diamonds_light_png.png', 954),
(34, 'Five-SeveN | Case Hardened', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_aq_oiled_light_png.png', 469),
(35, 'Five-SeveN | Retrobution', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_cu_fiveseven_retrobution_light_png.png', 464),
(36, 'P250 | Muertos', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_p250_mandala_light_png.png', 905),
(37, 'P250 | Asiimov', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_p250_asiimov_light_png.png', 148),
(38, 'P250 | See Ya Later', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_png.png', 991),
(39, 'P250 | Nuclear Threat', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_sp_nukestripe_green_light_png.png', 538),
(40, 'P250 | Undertow', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_am_p250_beaded_paint_light_png.png', 697),
(41, 'FAMAS | Styx', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_am_nuclear_skulls2_famas_light_png.png', 871),
(42, 'FAMAS | Roll Cage', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_gs_famas_rally_light_png.png', 271),
(43, 'FAMAS | Mecha Industries', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_gs_famas_mecha_light_png.png', 714),
(44, 'FAMAS | Valence', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_aq_famas_contour_light_png.png', 767),
(45, 'FAMAS | Neural Net', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_am_famas_dots_light_png.png', 692),
(46, 'MAC-10 | Neon Rider', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_mac10_neonrider_light_png.png', 160),
(47, 'MAC-10 | Disco Tech', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_mac10_nacre_light_png.png', 694),
(48, 'MAC-10 | Hot Snakes', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_gs_mac10_snake_light_png.png', 10),
(49, 'MAC-10 | Stalker', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_gs_mac10_stalker_light_png.png', 931),
(50, 'MAC-10 | Allure', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_mac10_isoonna_light_png.png', 650),
(51, 'AUG | Akihabara Accept', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_anime_aug_light_png.png', 447),
(52, 'AUG | Stymphalian', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_gs_aug_stymphalian_birds_light_png.png', 276),
(53, 'AUG | Syd Mead', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_gs_aug_syd_mead_light_png.png', 31),
(54, 'AUG | Chameleon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_aug_chameleonaire_light_png.png', 310),
(55, 'AUG | Momentum', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_aug_momentum_light_png.png', 453),
(56, 'MP7 | Bloodsport', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_gs_mp7_bloodsport_light_png.png', 338),
(57, 'MP7 | Cirrus', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_gs_final_pooldeadv2_light_png.png', 318),
(58, 'MP7 | Special Delivery', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_mp7_classified_light_png.png', 569),
(59, 'MP7 | Impire', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_sp_mp7_impire_light_png.png', 891),
(60, 'MP7 | Powercore', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_gs_powercore_mp7_light_png.png', 753),
(61, 'Galil AR | Sugar Rush', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_galil_candychaos_light_png.png', 95),
(62, 'Galil AR | Stone Cold', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_gs_galil_nightwing_light_png.png', 189),
(63, 'Galil AR | Crimson Tsunami', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_sp_galil_wave_light_png.png', 651),
(64, 'Galil AR | Eco', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_galil_eco_light_png.png', 694),
(65, 'Galil AR | Chatterbox', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_galil_abrasion_light_png.png', 515),
(66, 'P90 | Death by Kitty', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_catskulls_p90_light_png.png', 487),
(67, 'P90 | Trigon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_p90_trigon_light_png.png', 878),
(68, 'P90 | Asiimov', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_p90-asiimov_light_png.png', 940),
(69, 'P90 | Emerald Dragon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_dragon_p90_bravo_light_png.png', 73),
(70, 'P90 | Shapewood', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_p90_shapewood_light_png.png', 510),
(71, 'MAG-7 | Justice', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_gs_mag7_justice_light_png.png', 339),
(72, 'MAG-7 | Heat', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_mag7_redhot_light_png.png', 157),
(73, 'MAG-7 | Swag-7', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_aq_mag7_swag7_light_png.png', 750),
(74, 'MAG-7 | Petroglyph', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_mag7_tribal_light_png.png', 294),
(75, 'MAG-7 | Cinquedea', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_gs_mag7_glass_light_png.png', 200),
(76, 'Nova | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_nova_hyperbeast_light_png.png', 111),
(77, 'Nova | Bloomstick', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_spring_nova_light_png.png', 937),
(78, 'Nova | Antique', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_nova_antique_light_png.png', 379),
(79, 'Nova | Exo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_aq_nova_sci_fi_light_png.png', 63),
(80, 'Nova | Koi', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_nova_koi_light_png.png', 160),
(81, 'M249 | Nebula Crusader', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_gs_m249_nebula_crusader_light_png.png', 602),
(82, 'M249 | System Lock', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_m249_sektor_light_png.png', 540),
(83, 'M249 | Spectre', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_m249_spectre_light_png.png', 885),
(84, 'M249 | Magma', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_aq_obsidian_light_png.png', 813),
(85, 'M249 | Impact Drill', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_so_keycolors_light_png.png', 408);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skrzynki`
--

CREATE TABLE `skrzynki` (
  `id_skrzynki` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `skrzynki`
--

INSERT INTO `skrzynki` (`id_skrzynki`, `nazwa`, `cena`, `img`) VALUES
(1, 'Skrzynia Małpy', '659.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/zdj1.png?raw=true'),
(2, 'Skrzynia Bambi', '224.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/zdj2.png?raw=true'),
(3, 'Skrzynia Psiaka', '125.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/zdj3.png?raw=true'),
(4, 'Skrzynia Kota Dagrusia', '936.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/zdj4.png?raw=true'),
(5, 'Skrzynia Delfina', '20.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/lootbox%20with%20do%20d3601f00-8a3c-42db-b461-a1e132d502c6.png?raw=true'),
(6, 'Skrzynia Psiaka premium', '815.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/lootbox%20with%20do%201c31f610-100f-4d3b-bce0-7b8a9e7e100c.png?raw=true'),
(7, 'Skrzynia Pandy Aleksa', '100.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/lootbox%20with%20pa%20594e05c7-a37d-458d-af55-5eca5afe2ff8.png?raw=true'),
(8, 'Skrzynia Krowy', '29.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/lootbox%20with%20co%20269cc387-6359-4569-9013-f262a1e8226b.png?raw=true'),
(9, 'Skrzynia Niewiadomo czego', '828.00', 'https://github.com/Igi2005/CHEZ/blob/Front/src/assets/lootbox%20with%20ju%20850e231d-65ba-4b3d-99bf-807461fd98d5.png?raw=true');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skrzynkibronie`
--

CREATE TABLE `skrzynkibronie` (
  `id_skrzyni` int(11) NOT NULL,
  `id_broni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `skrzynkibronie`
--

INSERT INTO `skrzynkibronie` (`id_skrzyni`, `id_broni`) VALUES
(1, 3),
(1, 9),
(1, 11),
(1, 12),
(1, 13),
(1, 17),
(1, 19),
(1, 21),
(1, 24),
(1, 25),
(1, 26),
(1, 31),
(1, 32),
(1, 33),
(1, 40),
(1, 42),
(1, 48),
(1, 50),
(1, 51),
(1, 54),
(1, 60),
(1, 67),
(1, 70),
(1, 83),
(2, 12),
(2, 13),
(2, 17),
(2, 19),
(2, 22),
(2, 35),
(2, 41),
(2, 44),
(2, 54),
(2, 61),
(2, 64),
(2, 71),
(2, 73),
(2, 79),
(2, 80),
(3, 1),
(3, 2),
(3, 5),
(3, 6),
(3, 8),
(3, 21),
(3, 25),
(3, 28),
(3, 30),
(3, 41),
(3, 49),
(3, 52),
(3, 58),
(3, 60),
(3, 67),
(3, 76),
(3, 78),
(3, 81),
(3, 84),
(3, 85),
(4, 2),
(4, 7),
(4, 16),
(4, 23),
(4, 34),
(4, 36),
(4, 37),
(4, 40),
(4, 41),
(4, 43),
(4, 44),
(4, 55),
(4, 57),
(4, 60),
(4, 71),
(4, 79),
(5, 3),
(5, 5),
(5, 8),
(5, 9),
(5, 10),
(5, 14),
(5, 16),
(5, 29),
(5, 33),
(5, 37),
(5, 38),
(5, 47),
(5, 56),
(5, 66),
(5, 68),
(5, 70),
(5, 75),
(6, 2),
(6, 8),
(6, 17),
(6, 18),
(6, 25),
(6, 26),
(6, 27),
(6, 45),
(6, 49),
(6, 52),
(6, 55),
(6, 61),
(6, 65),
(6, 74),
(6, 83),
(7, 11),
(7, 17),
(7, 20),
(7, 22),
(7, 23),
(7, 26),
(7, 35),
(7, 37),
(7, 38),
(7, 45),
(7, 46),
(7, 50),
(7, 58),
(7, 60),
(7, 62),
(7, 63),
(7, 65),
(7, 72),
(7, 83),
(8, 3),
(8, 4),
(8, 7),
(8, 8),
(8, 15),
(8, 26),
(8, 29),
(8, 31),
(8, 32),
(8, 39),
(8, 45),
(8, 47),
(8, 51),
(8, 61),
(8, 67),
(8, 75),
(8, 79),
(8, 84),
(9, 12),
(9, 14),
(9, 36),
(9, 37),
(9, 38),
(9, 40),
(9, 43),
(9, 46),
(9, 49),
(9, 50),
(9, 51),
(9, 53),
(9, 55),
(9, 56),
(9, 64),
(9, 72),
(9, 73),
(9, 76),
(9, 84),
(10, 2),
(10, 11),
(10, 24),
(10, 27),
(10, 32),
(10, 48),
(10, 59),
(10, 62),
(10, 67),
(10, 69),
(10, 73),
(10, 74),
(10, 75),
(10, 77),
(10, 82),
(10, 85);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `balans` int(11) NOT NULL DEFAULT 100,
  `nick` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `balans`, `nick`) VALUES
(1, 'Xiega', 'Szefowski', 'xiega@wp.pl', 'qwerty', 1110, ''),
(4, 'poniat', 'poniat2', 'poniat@wp.pl', 'qwerty', 843471, 'poniato');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `ekwipunek`
--
ALTER TABLE `ekwipunek`
  ADD PRIMARY KEY (`id_operacji`),
  ADD KEY `id_broni` (`id_broni`);

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `skrzynki`
--
ALTER TABLE `skrzynki`
  ADD PRIMARY KEY (`id_skrzynki`);

--
-- Indeksy dla tabeli `skrzynkibronie`
--
ALTER TABLE `skrzynkibronie`
  ADD PRIMARY KEY (`id_skrzyni`,`id_broni`),
  ADD KEY `id_broni` (`id_broni`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `nickname` (`nick`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `ekwipunek`
--
ALTER TABLE `ekwipunek`
  MODIFY `id_operacji` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT dla tabeli `skrzynki`
--
ALTER TABLE `skrzynki`
  MODIFY `id_skrzynki` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `ekwipunek`
--
ALTER TABLE `ekwipunek`
  ADD CONSTRAINT `ekwipunek_ibfk_1` FOREIGN KEY (`id_usera`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ekwipunek_ibfk_2` FOREIGN KEY (`id_broni`) REFERENCES `images` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
