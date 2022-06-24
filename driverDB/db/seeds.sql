INSERT INTO series (name) VALUES 
('GT World Challenge America'),
('Pirelli GT4 America'),
('GT America'),
('TC America');

INSERT INTO class (name) VALUES
('Pro'),
('Pro-Am'),
('Am'),
('Silver'),
('TCX'),
('TC'),
('TCA');

INSERT INTO events (name, date) VALUES 
('Grand Prix of St. Petersburg', 'February 24-26, 2022'),
('Sonoma Raceway', 'April 14-17, 2022'),
('NOLA Motorsports Park', 'May 19-22, 2022'),
('VIRginia International Raceway', 'June 17-19, 2022'),
('Watkins Glen', 'July 22-24, 2022'),
('Music City Grand Prix', 'August 5-7, 2022'),
('Road America', 'August 19-21, 2022'),
('Sebring International Raceway', 'September 23-25, 2022'),
('Indianapolis Motor Speedway', 'October 7-9, 2022');

INSERT INTO teams (name, country) VALUES
('K-PAX', 'USA'),
('Crowdstrike Racing with Riley Motorsports', 'USA'),
('US Racetronics', 'USA'),
('DXDT Racing', 'USA'),
('TR3 Racing', 'USA'),
('Ian Lacy Racing', 'USA'),
('Triarsi Competizione', 'USA'),
('ST Racing', 'Canada'),
('RealTime Racing', 'USA'),
('Wright Motorsports', 'USA'),
('AF CORSE', 'USA'),
('Zelus Motorsports', 'USA'),
('Racers Edge Motorsports', 'USA'),
('BimmerWorld', 'USA'),
('Turner Motorsport', 'USA');

INSERT INTO vehicles (car,  number, classification, team_id, series_id)
VALUES
('Lamborghini Huracan GT3', '1', 'Pro', 1, 1),
('Lamborghini Huracan GT3', '3', 'Pro', 1, 1),
('Mercedes-AMG GT3', '04', 'Pro-Am', 2, 1),
('Mercedes-AMG GT3', '6', 'Pro', 3, 1),
('Mercedes-AMG GT3', '08', 'Pro-Am', 4, 1),
('Lamborghini Huracan GT3', '9', 'Pro-Am', 5, 1),
('Aston Martin Vantage AMR GT3', '12', 'Pro-Am', 6, 1),
('Ferrari 488 GT3', '13', 'Pro-Am', 7, 1),
('Ferrari 488 GT3', '23', 'Am', 7, 1),
('BMW M4 GT3', '38', 'Pro', 15, 1),
('Acura NSX GT3', '43', 'Pro-Am', 8, 1),
('Porsche 911 GT3-R (991.ii)', '45', 'Pro-Am', 9, 1),
('Ferrari 488 GT3', '61', 'Am', 10, 1),
('Mercedes-AMG GT3', '63', 'Pro-Am', 4, 1),
('Lamborghini Huracan GT3', '88', 'Pro-Am', 11, 1),
('Lamborghini Huracan GT3', '91', 'Pro-Am', 11, 1),
('Acura NSX GT3', '93', 'Pro-Am', 12, 1),
('BMW M4 GT3', '94', 'Pro-Am', 13, 1),
('BMW M4 GT3', '96', 'Pro', 14, 1);

INSERT INTO drivers (name, rating, nationality, team_id, vehicle_id) VALUES
('Michele Beretta', 'Silver', 'Italy', 1, 1),
('Andrea Caldarelli', 'Platinum', 'Italy', 1, 1),
('Misha Goikhberg', 'Silver', 'Canada', 1, 2),
('Jordan Pepper', 'Gold', 'South Africa', 1, 2),
('George Kurtz', 'Bronze', 'USA', 2, 3),
('Colin Braun', 'Gold', 'USA', 2, 3),
('Steven Aghakhani', 'Silver', 'USA', 3, 4),
('Loris Spinelli', 'Silver', 'Italy', 3, 4),
('Scott Smithson', 'Bronze', 'USA', 4, 5),
('Bryan Sellers', 'Gold', 'USA', 4, 5),
('Ziad Ghandour', 'Bronze', 'USA', 5, 6),
('Giacomo Altoe', 'Gold', 'Italy', 5, 6),
('Frank Gannett', 'Bronze', 'USA', 6, 7),
('Drew Staveley', 'Silver', 'USA', 6, 7),
('Justin Wetherill', 'Bronze', 'USA', 7, 8),
('Ryan Dalziel', 'Gold', 'Scotland', 7, 8),
('Charlie Scardina', 'Bronze', 'USA', 7, 9),
('Onofrio Triasi', 'Bronze', 'USA', 7, 9),
('Samantha Tan', 'Bronze', 'Canada', 8, 10),
('Nick Wittmer', 'Silver', 'Canada', 8, 10),
('Erin Vogel', 'Bronze', 'USA', 9, 11),
('Michael Cooper', 'Gold', 'USA', 9, 11),
('Charlie Luck', 'Bronze', 'USA', 10, 12),
('Jan Heylen', 'Gold', 'Belgium', 10, 12),
('Jean-Claude Saada', 'Bronze', 'USA', 11, 13),
('Conrad Grunewald', 'Bronze', 'USA', 11, 13),
('David Askew', 'Bronze', 'USA', 4, 14),
('Dirk Muller', 'Platinum', 'Germany', 4, 14),
('Jason Harward', 'Bronze', 'USA', 12, 15),
('Madison Snow', 'Silver', 'USA', 12, 15),
('Jeff Burton', 'Bronze', 'USA', 13, 16),
('Corey Lewis', 'Silver', 'USA', 13, 16),
('Ashton Harrison', 'Bronze', 'USA', 13, 17),
('Mario Farnbacher', 'Gold', 'Gemany', 13, 17),
('Chandler Hull', 'Bronze', 'USA', 14, 18),
('Bill Auberlen', 'Gold', 'USA', 14, 18),
('Michael Dinan', 'Silver', 'USA', 15, 19),
('Robby Foley', 'Silver', 'USA', 15, 19);



INSERT INTO fastlaps (driver_id, laptime) VALUES
(8, '1:44.150');

INSERT INTO results (event_id, series_id, fastlap_id) VALUES
(4, 1, 1);

INSERT INTO podiums (class_id, first_place, second_place, third_place, result_id) VALUES
(1, 1, 18, 2, 1),
(2, 8, 11, 13, 1),
(3, 9, NULL, NULL, 1);


