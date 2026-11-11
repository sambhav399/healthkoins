import { createCn } from 'cn/config';

export const cn = createCn({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-1',
            'display-2',
            'display-3',
            'display-4',
            'heading-1',
            'heading-2',
            'heading-3',
            'heading-4',
            'heading-5',
            'heading-6',
            'label-1',
            'label-2',
            'label-3',
            'label-4',
            'body-1',
            'body-2',
            'body-3',
            'body-4',
            'body-5',
            'body-6'
          ]
        }
      ],
      'font-weight': [{ font: ['400', '500', '600', '700'] }]
    }
  }
});
