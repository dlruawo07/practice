#include <stdio.h>

int main() {
  int N = 0, v = 0, count = 0;
  scanf("%d", &N);

  int arr[N];
  for(int i = 0; i < N; i++) {
    scanf("%d", &arr[i]);
  }

  scanf("%d", &v);
  for (int i = 0; i < N; i++) {
    if (arr[i] == v) count++;
  }

  printf("%d", count);
  
  return 0;
}