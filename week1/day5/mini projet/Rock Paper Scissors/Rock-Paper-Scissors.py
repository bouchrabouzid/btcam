# 
from game import Game

def get_user_menu_choice():
    print ('Menu')
    print("(p) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input ('enter ur chaice : ').lower()
    if choice in ['p' , 's' , 'q'] :
        return choice
    else :
        print('invalid choice')

def print_results(results) :
    print('results : ')
    print(f'u won {results['win']} times')
    print(f'u loss {results['loss']} times')
    print(f'u drew {results['draw']} times')
    print ('thanks for playing')



def main():
    # all 0 at fisrt
    results = {"win": 0, "loss": 0, "draw": 0}

    while True :
        # get the user choice
        choice = get_user_menu_choice()
        if choice == 'p' :
            game = Game()
            # runs teh game
            result = game.play()
            results[result] +=  1 

        elif choice == 's' :
            print_results(results)

        elif choice == 'q' :
            print_results(results)
            break
main()