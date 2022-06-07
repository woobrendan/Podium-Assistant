INSERT INTO series (name) VALUES 
('GT World Challenge America'),
('Pirelli GT4 America'),
('GT America'),
('TC America');

INSERT INTO teams (name, country) VALUES
('K-PAX', 'USA'),
('Crowdstrike Racing with Riley Motorsports', 'USA'),
('US Racetronics', 'USA'),
('DXDT Racing', 'USA'),
('TR3 Racing', 'USA'),
('Ian Lacy Racing', 'USA'),
('Triarsi Competizione', 'USA'),
('RealTime Racing', 'USA'),
('Wright Motorsports', 'USA'),
('AF CORSE', 'USA'),
('Zelus Motorsports', 'USA'),
('Racers Edge Motorsports', 'USA'),
('BimmerWorld', 'USA'),
('Turner Motorsport', 'USA'),
('ST Racing', 'Canada');

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
('Acura NSX GT3', '43', 'Pro-Am', 8, 1),
('Porsche 911 GT3-R (991.ii)', '45', 'Pro-Am', 9, 1),
('Ferrari 488 GT3', '61', 'Am', 10, 1),
('Mercedes-AMG GT3', '63', 'Pro-Am', 4, 1),
('Lamborghini Huracan GT3', '88', 'Pro-Am', 11, 1),
('Lamborghini Huracan GT3', '91', 'Pro-Am', 11, 1),
('Acura NSX GT3', '93', 'Pro-Am', 12, 1),
('BMW M4 GT3', '94', 'Pro-Am', 13, 1),
('BMW M4 GT3', '96', 'Pro', 14, 1),
('BMW M4 GT3', '28', 'Pro', 15, 1);

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
('Giacomo Altoe', 'Gold', 'Italy', 5, 6);