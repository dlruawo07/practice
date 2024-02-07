#include <stdio.h>

int main() {
  int N = 0;
  scanf("%d", &N);

  int X[N];
  int Y[N];

  int x_max = -10000, x_min = 10000;
  int y_max = -10000, y_min = 10000;

  for (int i = 0; i < N; i++) {
    scanf("%d %d", &X[i], &Y[i]);
    if (X[i] > x_max) x_max = X[i];
    if (X[i] < x_min) x_min = X[i];
    if (Y[i] > y_max) y_max = Y[i];
    if (Y[i] < y_min) y_min = Y[i];
  }
  printf("%d\n", (x_max - x_min) * (y_max - y_min));
}