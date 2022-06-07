const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('');
  
    expect(format_date(date)).toBe('');
  });

const {format_plural} = require('../utils/helpers')

test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('toocan', 2);
      const single = format_plural('mastif', 1);
      
      expect(plural).toBe('toocan');
      expect(single).toBe('mastif');
});

const {format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.awsomeness.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('awsomeness.com');
    expect(url3).toBe('google.com');
});