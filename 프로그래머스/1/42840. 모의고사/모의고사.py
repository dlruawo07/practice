def solution(answers):
    guesses = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    correct_counts = [0, 0, 0]

    for i, answer in enumerate(answers):
        for idx, guess in enumerate(guesses):
            if guess[i % len(guess)] == answer:
                correct_counts[idx] += 1

    max_correct = max(correct_counts)

    return [i + 1 for i, count in enumerate(correct_counts) if count == max_correct]