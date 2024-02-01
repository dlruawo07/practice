#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int to_Nth_power(int num, int power) {
  int result = 1;
  for (int i = 0; i < power; i++) {
    result *= num;
  }
  return result;
}

int to_B_notation(char *N, int B) {
  int result = 0;
  int power = 0;
  for (int i = strlen(N) - 1; i >= 0; i--) {
    if (N[i] >= 'A' && N[i] <= 'Z')
      N[i] -= 55;
    else
      N[i] -= 48;
    result += to_Nth_power(B, power++) * N[i];
  }
  return result;
}

int main() {
  char *N = malloc(1001);
  int B = 0;

  scanf("%s %d", N, &B);

  printf("%d\n",to_B_notation(N, B));
}