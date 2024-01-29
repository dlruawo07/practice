#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
  int T = 0;
  scanf("%d", &T);

  for (int i = 0; i < T; i++) {
    char *s = malloc((sizeof(char) * 1000) + 1);

    scanf("%s", s);
    printf("%c%c\n", s[0], s[strlen(s) - 1]);
  }
}