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

INSERT INTO vehicles (manufacturer, model,  number, classification, team_id)
VALUES
('Lamborghini', 'Huracan GT3', "1", 'Pro', 1),
('Lamborghini', 'Huracan GT3', "3", 'Pro', 1),
('Mercedes', 'AMG GT3', "04", 'Pro-Am', 2),
('Mercedes', 'AMG GT3', "6", 'Pro', 3),
('Mercedes', 'AMG GT3', "08", 'Pro-Am', 4),
('Lamborghini', 'Huracan GT3', "9", 'Pro-Am', 5);

INSERT INTO drivers (name, rating, nationality, team_id, vehicle_id) VALUES
('Michele Beretta', 'Silver', 'Italy', 1, 1),
('Andrea Caldarelli', 'Platinum', 'Italy', 1, 1),
('Misha Goikhberg', 'Silver', 'Canada', 1, 2),
('Jordan Pepper', 'Gold', 'South Africa', 1, 2),
('George Kurtz', 'Bronze', 'USA', 2, 3),
('Colin Braun', 'Gold', 'USA', 2, 3),
('Steven Aghakhani', 'Silver', 'USA', 3, 4),
('Loris Spinelli', 'Silver', 'Italy', 3, 4);