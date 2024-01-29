#include <stdio.h>

int main() {
  int H = 0, M = 0;

  scanf("%d %d", &H, &M);

  M -= 45;
  if (M < 0) {
    --H < 0 ? H += 24 : H;
    M += 60;
  }

  printf("%d %d", H, M);
  
  return 0;
}