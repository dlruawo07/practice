#include <stdio.h>

int main() {
  int X = 0;

  scanf("%d", &X);

  for (int i = 0; i < X / 4; i++) {
    printf("long ");
  }
  printf("int\n");

  return 0;
}