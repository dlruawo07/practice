#include <stdio.h>

int main() {
  int x = 0, y = 0;
  
  scanf("%d", &x);
  scanf("%d", &y);
  
  if (y > 0) x > 0 ? printf("1") : printf("2");
  if (y < 0) x > 0 ? printf("4") : printf("3");
  
  return 0;
}