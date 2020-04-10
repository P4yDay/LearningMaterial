
# decorator function
def shameful_cough_dec(func):
    def func_wrapper():
        # code before question function
        print('*cough*')
        # the question function
        func()
        # code after question function
        print('*cough*')
    return func_wrapper









# callng the decorator function and creating a function called question
@shameful_cough_dec
def question():
    print(' can I get this for half off?')



def answer():
    print('it\s only $50 you cheapskate')

question()
answer()