#include <stdio.h>

int main() {
  int x = 0, y = 0, w = 0, h = 0;
  int dists[4];
  
  scanf("%d %d %d %d", &x, &y, &w, &h);

  dists[0] = x;
  dists[1] = w - x;
  dists[2] = y;
  dists[3] = h - y;

  int min = 1000;
  for (int i = 0; i < 4; i++) {
    min = min > dists[i] ? dists[i] : min;
  }

  printf("%d\n", min);
}