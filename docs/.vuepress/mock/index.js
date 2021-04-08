import rules from '$docs/code/rules'
import mock from '$ui/utils/mock'

export default function () {
  rules.forEach(item => {
    mock(item)
  });
}