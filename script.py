import random
import pygame

# Initialise Pygame
pygame.init()

# Define the screen size
screen_width = 800
screen_height = 600

# Create the screen
screen = pygame.display.set_mode((screen_width, screen_height))

# Define the car size and position
car_width = 50
car_height = 100
car_x = (screen_width - car_width) / 2
car_y = screen_height - car_height - 50

# Define the enemy car size and position
enemy_width = 50
enemy_height = 100
enemy_x = random.randint(0, screen_width - enemy_width)
enemy_y = -enemy_height

# Define the car speed and enemy speed
car_speed = 5
enemy_speed = 3

# Load the car image
car_image = pygame.image.load("car.png")

# Load the enemy car image
enemy_image = pygame.image.load("enemy.png")

# Main game loop
while True:

  # Check for events
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      pygame.quit()
      quit()

  # Move the car
  keys = pygame.key.get_pressed()
  if keys[pygame.K_LEFT] and car_x > 0:
    car_x -= car_speed
  if keys[pygame.K_RIGHT] and car_x < screen_width - car_width:
    car_x += car_speed

  # Move the enemy car
  enemy_y += enemy_speed

  # Check for collision
  if car_x + car_width > enemy_x and car_x < enemy_x + enemy_width and car_y + car_height > enemy_y and car_y < enemy_y + enemy_height:
    print("Collision!")
    pygame.quit()
    quit()

  # Clear the screen
  screen.fill((255, 255, 255))

  # Draw the car
  screen.blit(car_image, (car_x, car_y))

  # Draw the enemy car
  screen.blit(enemy_image, (enemy_x, enemy_y))

  # Update the display
  pygame.display.update()
