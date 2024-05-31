-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Maj 2024, 20:51
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
  `id_broni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `images`
--

INSERT INTO `images` (`id`, `name`, `img`) VALUES
(1, 'Desert Eagle | Urban DDPAT', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png'),
(2, 'Desert Eagle | Golden Koi', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_am_scales_bravo_light_png.png'),
(3, 'Desert Eagle | Cobalt Disruption', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_cobalt_disruption_light_png.png'),
(4, 'Desert Eagle | Hypnotic', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_am_hypnotic_light_png.png'),
(5, 'Desert Eagle | Blaze', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_sp_blaze_light_png.png'),
(6, 'AK-47 | Redline', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_redline_light_png.png'),
(7, 'AK-47 | Vulcan', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_png.png'),
(8, 'AK-47 | Jaguar', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_jaguar_light_png.png'),
(9, 'AK-47 | Fire Serpent', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_fire_serpent_light_png.png'),
(10, 'AK-47 | Neon Revolution', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_cu_neon_rider_light_png.png'),
(11, 'M4A1-S | Blood Tiger', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_hy_redtiger_light_png.png'),
(12, 'M4A1-S | VariCamo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_hy_varicamo_light_png.png'),
(13, 'M4A1-S | Guardian', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_cu_guardian_light_png.png'),
(14, 'M4A1-S | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_cu_hyper_beast_light_png.png'),
(15, 'M4A1-S | Chantico\'s Fire', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_silencer_cu_chanticos_fire_light_png.png'),
(16, 'AWP | Dragon Lore', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_cu_dragon_lore_light_png.png'),
(17, 'AWP | Gungnir', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_gs_awp_gungnir_light_png.png'),
(18, 'AWP | Acheron', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_hy_nuclear_skulls_redblue_light_png.png'),
(19, 'AWP | Medusa', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_cu_medusa_light_png.png'),
(20, 'AWP | Man-o\'-war', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_awp_cu_manowar_light_png.png'),
(21, 'Glock-18 | Fade', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_aa_fade_light_png.png'),
(22, 'Glock-18 | Night', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_so_night_light_png.png'),
(23, 'Glock-18 | Dragon Tattoo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_am_dragon_tattoo_light_png.png'),
(24, 'Glock-18 | Water Elemental', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_cu_water_elemental_light_png.png'),
(25, 'Glock-18 | Weasel', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_glock_cu_weasel_light_png.png'),
(26, 'USP-S | Kill Confirmed', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_cu_kill_confirmed_light_png.png'),
(27, 'USP-S | Neo-Noir', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_cu_neo_noir_light_png.png'),
(28, 'USP-S | Cortex', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_cu_cortex_light_png.png'),
(29, 'USP-S | Orion', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_cu_orion_light_png.png'),
(30, 'USP-S | Stainless', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_usp_so_stainless_light_png.png'),
(31, 'Five-SeveN | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_cu_hyper_beast_light_png.png'),
(32, 'Five-SeveN | Monkey Business', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_aa_monkey_business_light_png.png'),
(33, 'Five-SeveN | Neon Kimono', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_hy_kimono_diamonds_light_png.png'),
(34, 'Five-SeveN | Case Hardened', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_aq_oiled_light_png.png'),
(35, 'Five-SeveN | Retrobution', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_fiveseven_cu_retribution_light_png.png'),
(36, 'P250 | Muertos', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_muertos_light_png.png'),
(37, 'P250 | Asiimov', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_asiimov_light_png.png'),
(38, 'P250 | See Ya Later', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_see_ya_later_light_png.png'),
(39, 'P250 | Nuclear Threat', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_nuclear_threat_light_png.png'),
(40, 'P250 | Undertow', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p250_cu_undertow_light_png.png'),
(41, 'FAMAS | Styx', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_cu_styx_light_png.png'),
(42, 'FAMAS | Roll Cage', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_cu_roll_cage_light_png.png'),
(43, 'FAMAS | Mecha Industries', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_cu_mecha_industries_light_png.png'),
(44, 'FAMAS | Valence', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_cu_valence_light_png.png'),
(45, 'FAMAS | Neural Net', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_famas_cu_neural_net_light_png.png'),
(46, 'MAC-10 | Neon Rider', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_neon_rider_light_png.png'),
(47, 'MAC-10 | Disco Tech', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_disco_tech_light_png.png'),
(48, 'MAC-10 | Hot Snakes', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_hot_snakes_light_png.png'),
(49, 'MAC-10 | Stalker', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_stalker_light_png.png'),
(50, 'MAC-10 | Allure', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mac10_cu_allure_light_png.png'),
(51, 'AUG | Akihabara Accept', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_akihabara_accept_light_png.png'),
(52, 'AUG | Stymphalian', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_stymphalian_bird_light_png.png'),
(53, 'AUG | Syd Mead', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_syd_mead_light_png.png'),
(54, 'AUG | Chameleon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_chameleon_light_png.png'),
(55, 'AUG | Momentum', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_aug_cu_momentum_light_png.png'),
(56, 'MP7 | Bloodsport', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_bloodsport_light_png.png'),
(57, 'MP7 | Cirrus', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_cirrus_light_png.png'),
(58, 'MP7 | Special Delivery', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_special_delivery_light_png.png'),
(59, 'MP7 | Impire', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_impire_light_png.png'),
(60, 'MP7 | Powercore', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mp7_cu_powercore_light_png.png'),
(61, 'Galil AR | Sugar Rush', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_sugar_rush_light_png.png'),
(62, 'Galil AR | Stone Cold', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_stone_cold_light_png.png'),
(63, 'Galil AR | Crimson Tsunami', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_crimson_tsunami_light_png.png'),
(64, 'Galil AR | Eco', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_eco_light_png.png'),
(65, 'Galil AR | Chatterbox', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_galilar_cu_chatterbox_light_png.png'),
(66, 'P90 | Death by Kitty', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_death_by_kitty_light_png.png'),
(67, 'P90 | Trigon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_trigon_light_png.png'),
(68, 'P90 | Asiimov', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_asiimov_light_png.png'),
(69, 'P90 | Emerald Dragon', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_emerald_dragon_light_png.png'),
(70, 'P90 | Shapewood', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_p90_cu_shapewood_light_png.png'),
(71, 'MAG-7 | Justice', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_justice_light_png.png'),
(72, 'MAG-7 | Heat', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_heat_light_png.png'),
(73, 'MAG-7 | Swag-7', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_swag7_light_png.png'),
(74, 'MAG-7 | Petroglyph', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_petroglyph_light_png.png'),
(75, 'MAG-7 | Cinquedea', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_mag7_cu_cinquedea_light_png.png'),
(76, 'Nova | Hyper Beast', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_hyper_beast_light_png.png'),
(77, 'Nova | Bloomstick', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_bloomstick_light_png.png'),
(78, 'Nova | Antique', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_antique_light_png.png'),
(79, 'Nova | Exo', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_exo_light_png.png'),
(80, 'Nova | Koi', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_nova_cu_koi_light_png.png'),
(81, 'M249 | Nebula Crusader', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_nebula_crusader_light_png.png'),
(82, 'M249 | System Lock', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_system_lock_light_png.png'),
(83, 'M249 | Spectre', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_spectre_light_png.png'),
(84, 'M249 | Magma', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_magma_light_png.png'),
(85, 'M249 | Impact Drill', 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m249_cu_impact_drill_light_png.png');

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
  `balans` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `balans`) VALUES
(1, 'Xiega', 'Szefowski', 'xiega@wp.pl', 'qwerty', 100);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `ekwipunek`
--
ALTER TABLE `ekwipunek`
  ADD PRIMARY KEY (`id_usera`,`id_broni`),
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
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `surname` (`surname`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password` (`password`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
