import random

#! geme class
class Game :
    def __init__(self):
        self.choises = ['rock' , 'paper' , 'scissors'] #list of valid choices

    def get_user_item(self):
        while True:
            user_input = input ('choose a rock, paper or scissors : ').lower()
            if user_input in self.choises :
                return user_input
            print('invalide choise :)')

        

    def get_computer_item(self):
        return random.choice(self.choises)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item :
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or (user_item == 'paper' and computer_item == 'rock') or (user_item == 'scissors' and computer_item == 'paper'):
            return 'win'
        else :
            return 'loss'

    def play(self):
        # get user choice
        user_item = self.get_user_item()
        #  get computer choice
        computer_item = self.get_computer_item()
        
        result = self.get_game_result(user_item , computer_item)
        print (f'u selected {user_item} the computer selected {computer_item}')
        if result == 'win' :
            print('u wiin !!!!')
        elif result =='loss' :
            print('u lose :(')
        else :
            print('its a draw')

        return result