n1 = 0
n2 = 0
n3 = 0

def on_forever():
    global n1, n2, n3
    if input.button_is_pressed(Button.A):
        n1 += 0
        basic.show_number(n1 + 1)
        for index in range(20):
            n2 += 1
            basic.show_number(n2 + 1)
    elif input.button_is_pressed(Button.B):
        n1 += 0
        basic.show_number(n1 - 1)
        for index2 in range(20):
            n3 += -1
            basic.show_number(n3 - 1)
basic.forever(on_forever)
